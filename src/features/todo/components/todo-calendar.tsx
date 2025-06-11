'use client';

import { Calendar } from '@/shared/ui/calendar';
import type { SelectedDate } from '@/features/todo/types/todo.type';

interface Props {
  selectedDate: SelectedDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<SelectedDate>>;
}

const TodoCalendar = ({ selectedDate, setSelectedDate }: Props) => {
  const localDate =
    selectedDate &&
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
    );

  return (
    <Calendar
      mode='single'
      selected={localDate}
      onSelect={setSelectedDate}
      captionLayout='dropdown'
      className='w-full flex-1'
    />
  );
};

export default TodoCalendar;
