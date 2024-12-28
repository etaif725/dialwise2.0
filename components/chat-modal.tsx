"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Chat with AI Agent</DialogTitle>
          <DialogDescription>
            Our AI agent is here to help answer your questions.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[600px] w-full bg-muted rounded-lg p-4">
          {/* Add your chat widget/iframe here */}
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <iframe
              src="https://vapi.ai?demo=true&shareKey=70823fd8-b4ff-465a-aa87-fc1e3d9b191e&assistantId=b16cb7cd-8a29-4996-81ff-399ac3da6e34"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Embedded Assistant"
            ></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}