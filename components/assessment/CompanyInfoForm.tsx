import { useClient } from "@/store/ClientStore";

interface Props {
    onNext: () => void;
    onBack: () => void;
  }
  
  export default function CompanyInfoForm({ onNext, onBack }: Props) {
    const { clientData, updateClientData } = useClient();
  
    return (
      <div>
        <h2>Company Information</h2>
        <input
          id="companyName"
          placeholder="Company Name"
          value={clientData.companyName}
          onChange={(e) => updateClientData("companyName", e.target.value)}
        />
        <input
          id="companyWebsite"
          placeholder="Company Website"
          value={clientData.companyWebsite}
          onChange={(e) => updateClientData("companyWebsite", e.target.value)}
        />
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    );
  }
  