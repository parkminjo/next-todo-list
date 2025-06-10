'use client';

import { useState } from 'react';

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  return (
    <input
      type='text'
      placeholder='할 일을 추가해주세요'
      value={todoInput}
      onChange={handleChangeInput}
      className='w-full rounded-lg bg-gray-100 px-4 py-2'
    />
  );
};

export default TodoInput;
