import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MyCalInline from "./MyCalInline";

interface ClientBoardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientBoardingModal({ isOpen, onClose }: ClientBoardingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Let's Discuss Your Needs</DialogTitle>
          <DialogDescription>
            Fill in this form and our team will be able to custom tailor our AI Solutions for your business and niche.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[600px] w-full">
          <div>
            <form>
              
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}