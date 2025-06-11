'use client';

import { Calendar } from '@/shared/ui/calendar';
import type { TodayDate } from '@/features/todo/types/todo.type';

interface Props {
  todayDate: TodayDate;
  setTodayDate: React.Dispatch<React.SetStateAction<TodayDate>>;
}

const TodoCalendar = ({ todayDate, setTodayDate }: Props) => {
  return (
    <Calendar
      mode='single'
      selected={todayDate}
      onSelect={setTodayDate}
      captionLayout='dropdown'
      className='[--cell-size:3rem] md:flex-1'
    />
  );
};

export default TodoCalendar;
