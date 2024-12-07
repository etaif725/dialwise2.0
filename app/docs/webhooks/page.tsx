"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";

const webhookSetupCode = `// Register webhook endpoint
await dialwise.createWebhook({
  url: 'https://api.example.com/webhooks/dialwise',
  events: [
    'call.started',
    'call.ended',
    'message.received',
    'message.sent'
  ],
  secret: 'your_webhook_secret'
});`;

const webhookHandlerCode = `// Example Express.js webhook handler
app.post('/webhooks/dialwise', (req, res) => {
  const signature = req.headers['x-dialwise-signature'];
  
  // Verify webhook signature
  if (!dialwise.verifyWebhookSignature(signature, req.body)) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = req.body;
  
  switch (event.type) {
    case 'call.started':
      handleCallStarted(event.data);
      break;
    case 'call.ended':
      handleCallEnded(event.data);
      break;
    // Handle other events...
  }
  
  res.status(200).send('OK');
});`;

export default function Webhooks() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Webhooks</h1>
        <p className="text-lg text-muted-foreground">
          Receive real-time updates about calls, messages, and other events.
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Setting Up Webhooks</h2>
        <Card className="p-6">
          <p className="mb-4">
            Register your webhook endpoint to receive event notifications:
          </p>
          <CodeBlock
            code={webhookSetupCode}
            language="javascript"
            fileName="webhook-setup.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Handling Webhook Events</h2>
        <Card className="p-6">
          <p className="mb-4">
            Example webhook handler implementation:
          </p>
          <CodeBlock
            code={webhookHandlerCode}
            language="javascript"
            fileName="webhook-handler.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Available Events</h2>
        <div className="space-y-4">
          {[
            {
              type: 'call.started',
              description: 'Triggered when a new call begins',
              payload: {
                call_id: 'call_123',
                agent_id: 'agent_456',
                caller: '+1234567890',
                timestamp: '2024-03-15T10:30:00Z'
              }
            },
            {
              type: 'call.ended',
              description: 'Triggered when a call is completed',
              payload: {
                call_id: 'call_123',
                duration: 180,
                outcome: 'completed',
                timestamp: '2024-03-15T10:33:00Z'
              }
            },
            {
              type: 'message.received',
              description: 'Triggered when a new message is received',
              payload: {
                message_id: 'msg_789',
                chatbot_id: 'bot_012',
                content: 'Hello!',
                timestamp: '2024-03-15T11:00:00Z'
              }
            }
          ].map((event, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.type}</h3>
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="bg-accent rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(event.payload, null, 2)}
                </pre>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}