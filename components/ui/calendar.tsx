import * as React from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // Custom Caption logic
  const CustomCaption = ({ calendarMonth, goToMonth }: { calendarMonth: Date; goToMonth: (month: Date) => void }) => {
    const handlePrevious = () => {
      const previousMonth = new Date(calendarMonth);
      previousMonth.setMonth(calendarMonth.getMonth() - 1);
      goToMonth(previousMonth);
    };

    const handleNext = () => {
      const nextMonth = new Date(calendarMonth);
      nextMonth.setMonth(calendarMonth.getMonth() + 1);
      goToMonth(nextMonth);
    };

    return (
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
          )}
          aria-label="Previous Month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium">
          {calendarMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button
          onClick={handleNext}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
          )}
          aria-label="Next Month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected: 'bg-primary text-primary-foreground hover:bg-primary focus:bg-primary',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        ...classNames,
      }}
      components={{
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };