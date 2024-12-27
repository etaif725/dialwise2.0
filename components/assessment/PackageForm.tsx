import { useClient } from "@/store/ClientStore";

interface PackageFormProps {
  onSubmit: () => void;
  onBack: () => void;
}

export default function PackageForm({ onSubmit, onBack }: PackageFormProps) {
  const { updateClientData } = useClient();

  return (
    <div>
      <h2>Select a Package</h2>
      <label>Estimated Usage</label>
      <input id="usage" onChange={(e) => updateClientData("packageDetails", { usage: e.target.value })} />

      <label>Budget</label>
      <input id="budget" onChange={(e) => updateClientData("packageDetails", { budget: e.target.value })} />

      <button onClick={onBack}>Back</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
