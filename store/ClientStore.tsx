"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AgentSettings {
  gender: string;
  personalityTraits: string;
  file: File | null;
  website: string;
  niche: string;
}

interface PackageDetails {
  usage: string;
  budget: string;
}

interface ClientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  industry: string;
  agentSettings: AgentSettings;
  packageDetails: PackageDetails;
}

interface ClientContextType {
  clientData: ClientData;
  updateClientData: (field: keyof ClientData, value: any) => void;
}

const defaultClientData: ClientData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  companyWebsite: "",
  industry: "",
  agentSettings: {
    gender: "",
    personalityTraits: "",
    file: null,
    website: "",
    niche: "",
  },
  packageDetails: {
    usage: "",
    budget: "",
  },
};

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: ReactNode }) {
  const [clientData, setClientData] = useState<ClientData>(defaultClientData);

  const updateClientData = (field: keyof ClientData, value: any) => {
    const updatedData = { ...clientData, [field]: value };
    setClientData(updatedData);
    localStorage.setItem("clientData", JSON.stringify(updatedData));
  };

  return (
    <ClientContext.Provider value={{ clientData, updateClientData }}>
      {children}
    </ClientContext.Provider>
  );
}

export const useClient = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }
  return context;
};
