import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-10 gap-4">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
