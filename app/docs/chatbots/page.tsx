"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";

const createChatbotCode = `const chatbot = await dialwise.createChatbot({
  name: 'Customer Support',
  language: 'en-US',
  platforms: ['website', 'whatsapp'],
  initialMessage: 'Hi! How can I help you today?',
  knowledgeBase: 'support-articles',
  fallbackEmail: 'support@example.com'
});`;

const handleMessageCode = `// Set up message handling
chatbot.onMessage(async (message) => {
  // Get message intent
  const intent = await message.getIntent();

  // Handle different intents
  switch (intent.type) {
    case 'support_request':
      await handleSupportRequest(message);
      break;
    case 'product_inquiry':
      await handleProductInquiry(message);
      break;
    default:
      await message.transferToAgent();
  }
});`;

const embedCode = `<!-- Add this to your HTML -->
<script>
  window.dialwiseConfig = {
    chatbotId: 'your_chatbot_id',
    theme: 'light',
    position: 'bottom-right'
  };
</script>
<script src="https://cdn.dialwise.ai/chat-widget.js"></script>`;

export default function Chatbots() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Chatbots</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create and manage AI chatbots across multiple platforms.
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Creating a Chatbot</h2>
        <Card className="p-6">
          <p className="mb-4">
            Create a new chatbot with specific capabilities and platforms:
          </p>
          <CodeBlock
            code={createChatbotCode}
            language="javascript"
            fileName="create-chatbot.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Message Handling</h2>
        <Card className="p-6">
          <p className="mb-4">
            Set up message handling logic for your chatbot:
          </p>
          <CodeBlock
            code={handleMessageCode}
            language="javascript"
            fileName="handle-messages.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Website Integration</h2>
        <Card className="p-6">
          <p className="mb-4">
            Add the chat widget to your website:
          </p>
          <CodeBlock
            code={embedCode}
            language="html"
            fileName="index.html"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Supported Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Website Widget',
              features: ['Custom themes', 'Mobile responsive', 'Multi-language support']
            },
            {
              name: 'WhatsApp',
              features: ['Business API integration', 'Rich media support', 'Quick replies']
            },
            {
              name: 'Facebook Messenger',
              features: ['Automated responses', 'Button templates', 'Carousel cards']
            },
            {
              name: 'SMS',
              features: ['Two-way messaging', 'Scheduled messages', 'Opt-out handling']
            }
          ].map((platform, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {platform.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}