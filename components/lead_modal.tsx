import { useState } from "react";
import LeadForm from "./lead_form";

export default function LeadFormModal() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadFormModal = () => setIsLeadFormOpen(true);
  const closeLeadFormModal = () => setIsLeadFormOpen(false);

  return (
    <>
      {/* Trigger button for Lead Form Modal */}
      <button onClick={openLeadFormModal}>Contact AI Agent</button>

      {/* Lead Form Modal */}
      <LeadForm isOpen={isLeadFormOpen} onClose={closeLeadFormModal} />
    </>
  );
}
