'use client';

import { useTodoInput } from '../hooks/use-todo-input';
import type { SelectedDate } from '@/features/todo/types/todo.type';

interface Props {
  selectedDate: SelectedDate;
}

const TodoInput = ({ selectedDate }: Props) => {
  const { content, onChange, onAddTodo } = useTodoInput(selectedDate);

  return (
    <form onSubmit={onAddTodo}>
      <input
        type='text'
        placeholder='할 일을 추가해주세요'
        value={content}
        onChange={onChange}
        className='w-full rounded-lg bg-gray-100 px-4 py-2 outline-gray-500'
      />
    </form>
  );
};

export default TodoInput;
