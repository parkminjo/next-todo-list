'use client';

import { useState } from 'react';
import { addTodo } from '@/features/todo/api/client/add-todo';

const TodoInput = () => {
  const [content, setContent] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await addTodo({
      content,
      date: new Date().getTime(),
      isDone: false,
    });

    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 추가해주세요'
        value={content}
        onChange={handleChangeInput}
        className='w-full rounded-lg bg-gray-100 px-4 py-2'
      />
    </form>
  );
};

export default TodoInput;
