import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-10">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
