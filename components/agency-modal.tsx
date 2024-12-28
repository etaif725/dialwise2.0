import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface AgencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgencyModal({ isOpen, onClose }: AgencyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply for Agency Program</DialogTitle>
          <DialogDescription>
            Choose a convenient time for your personalized demo.
          </DialogDescription>
        </DialogHeader>
        <div className="h-full w-full">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Agency Name</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md border bg-background"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Contact Person</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md border bg-background"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Email</label>
                    <input
                      type="email"
                      className="w-full p-2 rounded-md border bg-background"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Website</label>
                    <input
                      type="url"
                      className="w-full p-2 rounded-md border bg-background"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Number of Clients</label>
                    <select className="w-full p-2 rounded-md border bg-background" required>
                      <option value="">Select range</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}