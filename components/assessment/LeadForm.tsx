import React from "react";
import { useClient } from "@/store/ClientStore";

interface Props {
  onNext: () => void;
}

export default function LeadForm({ onNext }: Props) {
  const { clientData, updateClientData } = useClient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    updateClientData(id as keyof typeof clientData, value);
  };

  return (
    <div>
      <h2>Tell us about yourself</h2>
      <input id="firstName" placeholder="First Name" value={clientData.firstName} onChange={handleChange} required />
      <input id="lastName" placeholder="Last Name" value={clientData.lastName} onChange={handleChange} required />
      <input id="email" type="email" placeholder="Email" value={clientData.email} onChange={handleChange} required />
      <input id="phone" placeholder="Phone" value={clientData.phone} onChange={handleChange} required />

      <button onClick={onNext}>Next</button>
    </div>
  );
}
