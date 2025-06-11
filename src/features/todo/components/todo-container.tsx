'use client';

import { useState } from 'react';
import TodoCalendar from '@/features/todo/components/todo-calendar';
import TodoInput from '@/features/todo/components/todo-input';
import TodoList from '@/features/todo/components/todo-list';
import type { TodayDate } from '@/features/todo/types/todo.type';

const TodoContainer = () => {
  const [todayDate, setTodayDate] = useState<TodayDate>(new Date());

  return (
    <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
      <TodoCalendar todayDate={todayDate} setTodayDate={setTodayDate} />
      <div className='flex w-full flex-1 flex-col gap-4'>
        <TodoInput />
        <TodoList todayDate={todayDate} />
      </div>
    </div>
  );
};

export default TodoContainer;
