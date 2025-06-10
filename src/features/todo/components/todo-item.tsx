import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';
import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <li className='flex items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-200'>
      <div className='flex gap-2'>
        <input type='checkbox' checked={todo.isDone} />
        <h3>{todo.content}</h3>
      </div>
      <div className='flex gap-3'>
        <button className='text-gray-500'>
          <FaPencil />
        </button>
        <button className='text-gray-500'>
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
