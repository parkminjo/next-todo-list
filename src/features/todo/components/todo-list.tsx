'use client';

import TodoItem from '@/features/todo/components/todo-item';
import { useTodoListQuery } from '@/features/todo/hooks/use-todo-list-quey';

const TodoList = () => {
  const { data: todoList, isPending, isError, error } = useTodoListQuery();

  if (isPending) {
    return <div>로딩 중</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className='flex flex-col gap-2'>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
