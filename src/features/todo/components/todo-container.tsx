'use client';

import { useEffect, useState } from 'react';
import TodoCalendar from '@/features/todo/components/todo-calendar';
import TodoInput from '@/features/todo/components/todo-input';
import TodoList from '@/features/todo/components/todo-list';
import type { SelectedDate } from '@/features/todo/types/todo.type';

const TodoContainer = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate | undefined>(
    undefined,
  );

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return (
    <div className='flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8'>
      <TodoCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className='flex w-full flex-1 flex-col gap-4'>
        <TodoInput selectedDate={selectedDate} />
        <TodoList selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default TodoContainer;
