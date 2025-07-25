'use client';

import { Calendar } from '@/shared/ui/calendar';
import type { SelectedDate } from '@/features/todo/types/todo.type';

interface Props {
  selectedDate: SelectedDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<SelectedDate>>;
}

const TodoCalendar = ({ selectedDate, setSelectedDate }: Props) => {
  return (
    <Calendar
      mode='single'
      selected={selectedDate}
      onSelect={setSelectedDate}
      className='w-full flex-1'
    />
  );
};

export default TodoCalendar;
