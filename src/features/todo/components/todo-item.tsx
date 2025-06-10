'use client';

import { FaRegTrashCan } from 'react-icons/fa6';
import { useUpdateTodoMutation } from '@/features/todo/hooks/use-update-todo-mutation';
import { useDeleteTodoMutation } from '@/features/todo/hooks/use-delete-todo-mutation';
import type { Todo } from '@/features/todo/types/todo.type';
import { Checkbox } from '@/shared/ui/checkbox';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { mutate: deletedTodoMutate } = useDeleteTodoMutation();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const handleDelete = async () => {
    deletedTodoMutate(todo.id);
  };

  const handleUpdate = async () => {
    updateTodoMutate({ todoId: todo.id, isDone: !todo.isDone });
  };

  return (
    <li className='flex items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-200'>
      <div className='flex items-center gap-3'>
        <Checkbox checked={todo.isDone} onCheckedChange={handleUpdate} />
        <h3>{todo.content}</h3>
      </div>
      <div className='flex gap-3'>
        <button
          aria-label='삭제'
          onClick={handleDelete}
          className='text-gray-500'
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
