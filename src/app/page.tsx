import { getTodoList } from '@/features/todo/api/getTodoList';
import TodoInput from '@/features/todo/components/todo-input';
import TodoList from '@/features/todo/components/todo-list';

const Home = async () => {
  const todoList = await getTodoList();

  return (
    <div className='flex flex-col gap-4'>
      <TodoInput />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Home;
