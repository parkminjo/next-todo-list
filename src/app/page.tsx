import TodoInput from '@/features/todo/components/todo-input';
import TodoList from '@/features/todo/components/todo-list';

const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Home;
