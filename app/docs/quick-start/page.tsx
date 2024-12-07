"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const installCode = {
  npm: "npm install @dialwise/sdk",
  yarn: "yarn add @dialwise/sdk",
  pnpm: "pnpm add @dialwise/sdk"
};

const setupCode = `import { DialWise } from '@dialwise/sdk';

// Initialize the client
const dialwise = new DialWise({
  apiKey: process.env.DIALWISE_API_KEY,
  environment: 'production'
});`;

const voiceAgentCode = `// Create a voice agent
const agent = await dialwise.createAgent({
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
      { day: 'tuesday', start: '09:00', end: '17:00' },
      // ... other days
    ]
  }
});`;

const chatbotCode = `// Create a chatbot
const chatbot = await dialwise.createChatbot({
  name: 'Support Bot',
  language: 'en-US',
  platforms: ['website', 'whatsapp'],
  initialMessage: 'Hi! How can I help you today?',
  knowledgeBase: 'support-articles',
  fallbackContact: 'support@example.com'
});`;

export default function QuickStart() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Quick Start Guide</h1>
        <p className="text-lg text-muted-foreground">
          Get up and running with DialWise.ai in minutes.
        </p>
      </motion.div>

      {/* Installation */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <Card className="p-6">
          <Tabs defaultValue="npm">
            <TabsList>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            <TabsContent value="npm">
              <CodeBlock
                code={installCode.npm}
                language="bash"
                fileName="Terminal"
              />
            </TabsContent>
            <TabsContent value="yarn">
              <CodeBlock
                code={installCode.yarn}
                language="bash"
                fileName="Terminal"
              />
            </TabsContent>
            <TabsContent value="pnpm">
              <CodeBlock
                code={installCode.pnpm}
                language="bash"
                fileName="Terminal"
              />
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Setup */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Setup</h2>
        <Card className="p-6">
          <p className="mb-4">
            Initialize the DialWise client with your API key:
          </p>
          <CodeBlock
            code={setupCode}
            language="javascript"
            fileName="setup.js"
          />
        </Card>
      </section>

      {/* Create Voice Agent */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Create a Voice Agent</h2>
        <Card className="p-6">
          <p className="mb-4">
            Configure your first AI voice agent:
          </p>
          <CodeBlock
            code={voiceAgentCode}
            language="javascript"
            fileName="voice-agent.js"
          />
        </Card>
      </section>

      {/* Create Chatbot */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Create a Chatbot</h2>
        <Card className="p-6">
          <p className="mb-4">
            Set up an AI chatbot:
          </p>
          <CodeBlock
            code={chatbotCode}
            language="javascript"
            fileName="chatbot.js"
          />
        </Card>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Configure Webhooks</h3>
            <p className="text-muted-foreground">
              Set up webhooks to receive real-time updates about calls and messages.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Train Your AI</h3>
            <p className="text-muted-foreground">
              Customize your AI's responses and behavior using our training tools.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}