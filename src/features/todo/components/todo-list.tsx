import TodoItem from '@/features/todo/components/todo-item';
import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todoList: Todo[];
}

const TodoList = ({ todoList }: Props) => {
  return (
    <ul className='flex flex-col gap-2'>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
