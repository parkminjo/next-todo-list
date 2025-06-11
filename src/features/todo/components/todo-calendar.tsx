'use client';

import { Calendar } from '@/shared/ui/calendar';
import { useState } from 'react';

const TodoCalendar = () => {
  const [todayDate, setTodayDate] = useState<Date | undefined>(new Date());

  return (
    <div className='flex-1'>
      <Calendar
        mode='single'
        selected={todayDate}
        onSelect={setTodayDate}
        captionLayout='dropdown'
        className='[--cell-size:3rem]'
      />
    </div>
  );
};

export default TodoCalendar;
