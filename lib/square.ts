// Exporting PaymentPayload interface
export interface PaymentPayload {
  amount: number; // Amount in cents
  currency: string; // Currency code (e.g., "USD")
  description: string;
}

const SquarePayments = {
  async initializePaymentForm(containerId: string) {
    if (!window.Square) {
      throw new Error("Square.js is not loaded.");
    }

    const payments = window.Square.payments(
      process.env.NEXT_PUBLIC_SQUARE_APP_ID!,
      process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!
    );

    const card = await payments.card();
    await card.attach(`#${containerId}`);
    return card;
  },

  async tokenizeCard(cardInstance: any, payload: PaymentPayload) {
    try {
      const tokenResult = await cardInstance.tokenize();
      if (tokenResult.status !== 'OK') {
        throw new Error(
          tokenResult.errors?.map((e: any) => e.detail).join('\n') || 'Failed to tokenize card.'
        );
      }

      // Send the token to your backend for payment processing
      const response = await fetch('/api/square/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceId: tokenResult.token,
          amount: payload.amount,
          currency: payload.currency,
          description: payload.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment processing failed.');
      }

      return await response.json();
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  },
};

export default SquarePayments;
