'use client';

import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';
import { deleteTodo } from '@/features/todo/api/client/delete-todo';
import { updateTodo } from '@/features/todo/api/client/update-todo';
import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  const handleUpdate = async () => {
    await updateTodo({ todoId: todo.id, isDone: !todo.isDone });
  };

  return (
    <li className='flex items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-200'>
      <div className='flex gap-2'>
        <input type='checkbox' checked={todo.isDone} onChange={handleUpdate} />
        <h3>{todo.content}</h3>
      </div>
      <div className='flex gap-3'>
        <button aria-label='수정' className='text-gray-500'>
          <FaPencil />
        </button>
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
