import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AssessmentForm from "@/components/assessment_form";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Schedule a Demo</DialogTitle>
          <DialogDescription>
            Choose a convenient time for your personalized demo.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[600px] w-full">
          <AssessmentForm isOpen={false} onClose={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      </DialogContent>
    </Dialog>
  );
}