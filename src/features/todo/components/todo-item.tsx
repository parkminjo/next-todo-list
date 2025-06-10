import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <li className='flex items-center justify-between'>
      <div className='flex gap-2'>
        <input type='checkbox' checked={todo.isDone} />
        <h3>{todo.content}</h3>
      </div>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
