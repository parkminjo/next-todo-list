'use client';

import { useState } from 'react';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { toast } from 'react-toastify';
import { INFO_MESSAGE } from '@/shared/constants/info-message';
import { TOAST_ID } from '@/shared/constants/toast-id';
import TodoItemActionButtons from '@/features/todo/components/todo-item-action-buttons';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../hooks/use-todo-mutation';
import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [content, setContent] = useState(todo.content);
  const [isEditMode, setIsEditMode] = useState(false);

  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const handleClickCheckbox = async () => {
    updateTodoMutate({ todoId: todo.id, isDone: !todo.isDone });
  };

  const handleClickDelete = async () => {
    deleteTodoMutate(todo.id);
  };

  const handleClickEdit = () => {
    setIsEditMode(true);
  };

  const handleClickEditComplete = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (content.trim() === '') {
      toast.info(INFO_MESSAGE.TODO.EMPTY_INPUT, {
        toastId: TOAST_ID.EMPTY_INPUT,
      });
      return;
    }

    setIsEditMode(false);
    updateTodoMutate({ todoId: todo.id, isDone: todo.isDone, content });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <li className='flex h-[40px] items-center justify-between gap-6 py-2'>
      <div className='flex w-full items-center gap-2'>
        <Checkbox checked={todo.isDone} onCheckedChange={handleClickCheckbox} />
        <form
          onSubmit={handleClickEditComplete}
          className='flex w-full items-center justify-between gap-3'
        >
          <input
            type='text'
            aria-label='할 일 내용'
            value={content}
            onChange={handleChangeInput}
            disabled={!isEditMode}
            className={`w-full bg-transparent outline-none ${isEditMode && 'border-b-2 border-gray-400'}`}
          />

          {isEditMode ? (
            <Button type='submit' size='sm' aria-label='수정 완료'>
              수정 완료
            </Button>
          ) : (
            <TodoItemActionButtons
              onClickDelete={handleClickDelete}
              onClickEdit={handleClickEdit}
            />
          )}
        </form>
      </div>
    </li>
  );
};

export default TodoItem;
