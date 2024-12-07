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

const authenticationCode = {
  curl: `curl -X POST https://api.dialwise.ai/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key"
  }'`,
  node: `import { DialWise } from '@dialwise/sdk';

const dialwise = new DialWise({
  apiKey: process.env.DIALWISE_API_KEY
});`,
  python: `from dialwise import DialWise

dialwise = DialWise(
    api_key="your_api_key"
)`
};

export default function ApiReference() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">API Reference</h1>
        <p className="text-lg text-muted-foreground">
          Complete reference documentation for the DialWise API.
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
        <Card className="p-6">
          <p className="mb-4">
            All API requests must include your API key in the Authorization header.
          </p>
          <Tabs defaultValue="curl">
            <TabsList>
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="node">Node.js</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="curl">
              <CodeBlock
                code={authenticationCode.curl}
                language="bash"
                fileName="Terminal"
              />
            </TabsContent>
            <TabsContent value="node">
              <CodeBlock
                code={authenticationCode.node}
                language="javascript"
                fileName="index.js"
              />
            </TabsContent>
            <TabsContent value="python">
              <CodeBlock
                code={authenticationCode.python}
                language="python"
                fileName="main.py"
              />
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Endpoints</h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Voice Agents</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div>
                  <div className="font-mono text-sm">POST /v1/agents</div>
                  <div className="text-sm text-muted-foreground">Create a new voice agent</div>
                </div>
                <div className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary">
                  POST
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div>
                  <div className="font-mono text-sm">GET /v1/agents/{"{id}"}</div>
                  <div className="text-sm text-muted-foreground">Get agent details</div>
                </div>
                <div className="text-xs font-semibold px-2 py-1 rounded bg-green-500/10 text-green-500">
                  GET
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Chatbots</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div>
                  <div className="font-mono text-sm">POST /v1/chatbots</div>
                  <div className="text-sm text-muted-foreground">Create a new chatbot</div>
                </div>
                <div className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary">
                  POST
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div>
                  <div className="font-mono text-sm">GET /v1/chatbots/{"{id}"}</div>
                  <div className="text-sm text-muted-foreground">Get chatbot details</div>
                </div>
                <div className="text-xs font-semibold px-2 py-1 rounded bg-green-500/10 text-green-500">
                  GET
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}