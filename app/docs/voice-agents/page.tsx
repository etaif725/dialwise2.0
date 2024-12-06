"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";

const createAgentCode = `const agent = await dialwise.createAgent({
  name: 'Sales Representative',
  language: 'en-US',
  voice: 'emma',
  capabilities: [
    'lead_qualification',
    'appointment_scheduling',
    'product_information'
  ],
  businessHours: {
    timezone: 'America/New_York',
    schedule: [
      { day: 'monday', start: '09:00', end: '17:00' },
      { day: 'tuesday', start: '09:00', end: '17:00' }
    ]
  },
  fallbackEmail: 'sales@example.com'
});`;

const handleCallCode = `// Set up call handling
agent.onIncomingCall(async (call) => {
  // Greet the caller
  await call.say('Hello! This is Emma from Example Corp. How can I help you today?');

  // Listen for customer response
  const intent = await call.listen({
    timeout: 5000,
    endOnSilence: true
  });

  // Handle different intents
  switch (intent.type) {
    case 'schedule_appointment':
      await handleAppointmentScheduling(call);
      break;
    case 'product_inquiry':
      await handleProductInquiry(call);
      break;
    default:
      await call.transferToHuman();
  }
});`;

export default function VoiceAgents() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Voice Agents</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create and manage AI-powered voice agents.
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Creating a Voice Agent</h2>
        <Card className="p-6">
          <p className="mb-4">
            Create a new voice agent with specific capabilities and business hours:
          </p>
          <CodeBlock
            code={createAgentCode}
            language="javascript"
            fileName="create-agent.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Handling Calls</h2>
        <Card className="p-6">
          <p className="mb-4">
            Set up call handling logic for your voice agent:
          </p>
          <CodeBlock
            code={handleCallCode}
            language="javascript"
            fileName="handle-calls.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Available Voices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Emma', gender: 'Female', accent: 'American' },
            { name: 'James', gender: 'Male', accent: 'British' },
            { name: 'Sofia', gender: 'Female', accent: 'Spanish' },
            { name: 'Alex', gender: 'Male', accent: 'Australian' },
          ].map((voice, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{voice.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Gender: {voice.gender}</div>
                <div>Accent: {voice.accent}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}