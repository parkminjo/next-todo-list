import TodoItem from '@/features/todo/components/todo-item';
import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todoList: Todo[];
}

const TodoList = ({ todoList }: Props) => {
  const todos = [
    {
      id: 1,
      content: '밥 먹기',
      isDone: false,
      date: new Date().getTime(),
    },
  ];

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
