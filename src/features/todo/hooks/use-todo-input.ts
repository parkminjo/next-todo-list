import { useState } from 'react';
import { toast } from 'react-toastify';
import { TOAST_ID } from '@/shared/constants/toast-id';
import { INFO_MESSAGE } from '@/shared/constants/info-message';
import { useAddTodoMutation } from './use-todo-mutation';
import type { SelectedDate } from '@/features/todo/types/todo.type';

export const useTodoInput = (selectedDate: SelectedDate) => {
  const [content, setContent] = useState('');
  const { mutate: addTodoMutate } = useAddTodoMutation();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (content.trim() === '') {
      toast.info(INFO_MESSAGE.TODO.EMPTY_INPUT, {
        toastId: TOAST_ID.EMPTY_INPUT,
      });
      return;
    }

    if (selectedDate) {
      addTodoMutate({
        content,
        date: selectedDate,
        isDone: false,
      });

      setContent('');
    }
  };

  return {
    content,
    onChange: handleChangeInput,
    onAddTodo: addTodo,
  };
};
