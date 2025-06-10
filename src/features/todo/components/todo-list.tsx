'use client';

import TodoItem from '@/features/todo/components/todo-item';
import { useTodoListQuery } from '@/features/todo/hooks/use-todo-list-quey';
import { Skeleton } from '@/shared/ui/skeleton';

const TodoList = () => {
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

  const incompleteTodoList = todoList.filter((todo) => !todo.isDone);
  const completedTodoList = todoList.filter((todo) => todo.isDone);

  const isCompletedTodoList = completedTodoList.length !== 0;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>
          미완료
          <span className='ml-1 text-gray-400'>
            {incompleteTodoList.length}
          </span>
        </h2>
        <ul className='flex flex-col gap-2'>
          {incompleteTodoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
      {isCompletedTodoList && (
        <div className='flex flex-col gap-2'>
          <h2 className='text-sm'>
            완료
            <span className='ml-1 text-gray-400'>
              {completedTodoList.length}
            </span>
          </h2>
          {completedTodoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
