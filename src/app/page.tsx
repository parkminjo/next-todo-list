import TodoContainer from '@/features/todo/components/todo-container';

const Home = () => {
  const initialDate = new Date();

  return <TodoContainer initialDate={initialDate} />;
};

export default Home;
