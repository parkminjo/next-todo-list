import TodoCalendar from '@/features/todo/components/todo-calendar';
import TodoInput from '@/features/todo/components/todo-input';
import TodoList from '@/features/todo/components/todo-list';

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <TodoCalendar />
      <div className='flex flex-1 flex-col gap-4'>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
