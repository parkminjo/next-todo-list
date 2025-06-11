'use client';

import { useState } from 'react';
import { useAddTodoMutation } from '../hooks/use-add-todo-mutation';
import { toast } from 'react-toastify';
import { INFO_MESSAGE } from '@/shared/constants/info-message';

const TodoInput = () => {
  const [content, setContent] = useState('');
  const { mutate: addTodoMutate } = useAddTodoMutation();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (content === '') {
      toast.info(INFO_MESSAGE.TODO.EMPTY_INPUT, {
        toastId: 'EMPTY_INPUT',
      });
      return;
    }

    addTodoMutate({
      content,
      date: new Date(),
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
