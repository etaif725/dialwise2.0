import { Client, Environment } from 'square';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

// Initialize Square client
const squareClient = new Client({
  accessToken: process.env.SQUARE_SANDBOX_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

// Explicitly declare runtime and dynamic settings
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Helper function to set CORS headers
function setCorsHeaders(response: NextResponse) {
  const headersList = headers();
  const origin = headersList.get('origin') || '*';

  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  return response;
}

// Helper function to create JSON response with CORS
function createResponse(data: any, status = 200) {
  const response = NextResponse.json(data, { status });
  return setCorsHeaders(response);
}

// Configure allowed methods
// export const runtime = 'edge';
// export const dynamic = 'force-dynamic';

// Helper function to validate environment variables
function validateEnvVariables() {
  const requiredVars = ['SQUARE_SANDBOX_ACCESS_TOKEN', 'SQUARE_LOCATION_ID'];
  for (const variable of requiredVars) {
    if (!process.env[variable]) {
      throw new Error(`Environment variable ${variable} is missing.`);
    }
  }
}

// Helper function to parse JSON request body
async function parseRequestBody(request: NextRequest) {
  try {
    return await request.json();
  } catch {
    throw new Error('Invalid request body.');
  }
}

// Helper function to handle customer creation or retrieval
async function handleCustomer(email: string) {
  try {
    const { result: customerResult } = await squareClient.customersApi.searchCustomers({
      query: {
        filter: {
          emailAddress: {
            exact: email,
          },
        },
      },
    });

    if (customerResult.customers?.length) {
      return customerResult.customers[0].id;
    }

    const { result: newCustomer } = await squareClient.customersApi.createCustomer({
      idempotencyKey: uuidv4(), // Replaced with uuidv4()
      emailAddress: email,
    });

    return newCustomer.customer?.id;
  } catch (error) {
    throw new Error('Failed to process customer information.');
  }
}

// Helper function to create a subscription
async function createSubscription(customerId: string, planId: string) {
  try {
    const { result: subscription } = await squareClient.subscriptionsApi.createSubscription({
      idempotencyKey: uuidv4(), // Replaced with uuidv4()
      locationId: process.env.SQUARE_LOCATION_ID!,
      planVariationId: planId,
      customerId,
      startDate: new Date().toISOString().split('T')[0],
    });

    if (!subscription.subscription?.id) {
      throw new Error('Subscription creation failed.');
    }

    return subscription.subscription;
  } catch (error) {
    throw new Error('Failed to create subscription.');
  }
}

// Helper function to create a one-time payment link
async function createPaymentLink(amount: number, currency: string, description: string, customerId?: string) {
  try {
    const { result } = await squareClient.checkoutApi.createPaymentLink({
      idempotencyKey: uuidv4(),
      order: {
        locationId: process.env.SQUARE_LOCATION_ID!,
        lineItems: [
          {
            name: description,
            quantity: '1',
            basePriceMoney: {
              amount: BigInt(amount), // Convert amount to bigint
              currency,
            },
          },
        ],
        ...(customerId && { customerId }),
      },
      checkoutOptions: {
        allowTipping: false,
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
        askForShippingAddress: false,
      },
    });

    if (!result.paymentLink?.url) {
      throw new Error('Failed to generate payment link.');
    }

    return result.paymentLink.url;
  } catch (error) {
    throw new Error('Failed to create payment link.');
  }
}

export async function POST(req: NextRequest) {
  console.log('Received POST request');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return createResponse(null, 204);
  }

  try {
    validateEnvVariables();
    console.log('Environment variables validated');

    const body = await parseRequestBody(req);
    console.log('Request body:', body);

    const { amount, currency, description, email, planId } = body;

    if (!amount || !currency || !description) {
      console.log('Missing required fields:', { amount, currency, description });
      return createResponse({ error: 'Missing required fields' }, 400);
    }

    let customerId;
    if (email) {
      console.log('Processing customer with email:', email);
      customerId = await handleCustomer(email);
    }

    if (planId) {
      console.log('Creating subscription with planId:', planId);
      const subscription = await createSubscription(customerId!, planId);
      return createResponse({
        subscriptionId: subscription.id,
        status: subscription.status,
      });
    }

    console.log('Creating payment link');
    const paymentLink = await createPaymentLink(amount, currency, description, customerId);
    console.log('Payment link created:', paymentLink);
    
    return createResponse({ url: paymentLink });
  } catch (error) {
    console.error('Error in POST handler:', error);
    
    if (error instanceof Error) {
      return createResponse({ error: error.message }, 500);
    } else {
      return createResponse({ error: 'An unexpected error occurred' }, 500);
    }
  }
}

// Handle OPTIONS preflight request
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}
