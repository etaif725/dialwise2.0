import { useClient } from "@/store/ClientStore";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function AgentSetupForm({ onNext, onBack }: Props) {
    const { clientData, updateClientData } = useClient();
  
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      updateClientData("agentSettings", { ...clientData.agentSettings, file });
    };
  
    return (
      <div>
        <h2>AI Agent Setup</h2>
        <input id="gender" placeholder="Gender" onChange={(e) => updateClientData("agentSettings", { gender: e.target.value })} />
        <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    );
  }
  