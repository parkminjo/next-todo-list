import TodoCalendar from '@/features/todo/components/todo-calendar';
import TodoInput from '@/features/todo/components/todo-input';
import TodoList from '@/features/todo/components/todo-list';

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
      <TodoCalendar />
      <div className='flex w-full flex-1 flex-col gap-4'>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
