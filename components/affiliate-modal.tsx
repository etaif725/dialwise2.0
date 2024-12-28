import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AffiliateModal({ isOpen, onClose }: AffiliateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply for Affiliate Program</DialogTitle>
          <DialogDescription>
            Choose a convenient time for your personalized demo.
          </DialogDescription>
        </DialogHeader>
        <div className="h-full w-full">
        <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company/Organization</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Website/Social Media URL</label>
                  <input
                    type="url"
                    className="w-full p-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Monthly Traffic/Audience Size</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your audience and how you plan to promote DialWise.ai</label>
                  <textarea
                    className="w-full p-2 rounded-md border bg-background h-16"
                    required
                  />
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