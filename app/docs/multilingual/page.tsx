"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";

const multilingualSetupCode = `const agent = await dialwise.createAgent({
  name: 'Multilingual Support',
  languages: ['en-US', 'es-ES', 'fr-FR'],
  defaultLanguage: 'en-US',
  translations: {
    greeting: {
      'en-US': 'Hello! How can I help you today?',
      'es-ES': '¡Hola! ¿Cómo puedo ayudarte hoy?',
      'fr-FR': 'Bonjour! Comment puis-je vous aider aujourd\'hui?'
    }
  }
});`;

const languageDetectionCode = `agent.onIncomingCall(async (call) => {
  // Automatically detect caller's language
  const detectedLanguage = await call.detectLanguage();
  
  // Switch to detected language if supported
  if (agent.languages.includes(detectedLanguage)) {
    await call.setLanguage(detectedLanguage);
  }
  
  // Greet in detected language
  await call.say('greeting');
});`;

export default function Multilingual() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Multilingual Support</h1>
        <p className="text-lg text-muted-foreground">
          Configure your AI agents to communicate in multiple languages.
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Setting Up Languages</h2>
        <Card className="p-6">
          <p className="mb-4">
            Create a multilingual agent with support for multiple languages:
          </p>
          <CodeBlock
            code={multilingualSetupCode}
            language="javascript"
            fileName="multilingual-setup.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Language Detection</h2>
        <Card className="p-6">
          <p className="mb-4">
            Automatically detect and adapt to the caller's language:
          </p>
          <CodeBlock
            code={languageDetectionCode}
            language="javascript"
            fileName="language-detection.js"
          />
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Supported Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { code: 'en-US', name: 'English (US)', voices: ['Emma', 'James'] },
            { code: 'es-ES', name: 'Spanish', voices: ['Sofia', 'Carlos'] },
            { code: 'fr-FR', name: 'French', voices: ['Marie', 'Pierre'] },
            { code: 'de-DE', name: 'German', voices: ['Anna', 'Hans'] },
            { code: 'it-IT', name: 'Italian', voices: ['Lucia', 'Marco'] },
            { code: 'ja-JP', name: 'Japanese', voices: ['Yuki', 'Kenji'] }
          ].map((language, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Code: {language.code}</div>
                <div>Voices: {language.voices.join(', ')}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}