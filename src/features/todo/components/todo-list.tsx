'use client';

import { Skeleton } from '@/shared/ui/skeleton';
import TodoItem from '@/features/todo/components/todo-item';
import { useTodoListQuery } from '@/features/todo/hooks/use-todo-list-quey';
import { getDateHeader } from '@/features/todo/utils/getDateHeader';
import type { TodayDate } from '@/features/todo/types/todo.type';

interface Props {
  todayDate: TodayDate;
}

const TodoList = ({ todayDate }: Props) => {
  const { data: todoList, isPending, isError, error } = useTodoListQuery();

  if (isPending) {
    return (
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>미완료</h2>
        <Skeleton className='h-[40px] w-full' />
        <Skeleton className='h-[40px] w-full' />
        <Skeleton className='h-[40px] w-full' />
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const todayTodoList = todoList.filter((todo) => {
    if (todayDate) {
      const isSameDate = getDateHeader(todo.date) === getDateHeader(todayDate);
      return isSameDate;
    }
  });

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-sm'>
        Today TODO
        <span className='ml-1 text-gray-400'>{todayTodoList.length}</span>
      </h2>
      <ul className='flex flex-col gap-2'>
        {todayTodoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
