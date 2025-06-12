'use client';

import { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { useUpdateTodoMutation } from '@/features/todo/hooks/use-update-todo-mutation';
import { useDeleteTodoMutation } from '@/features/todo/hooks/use-delete-todo-mutation';
import type { Todo } from '@/features/todo/types/todo.type';
import { toast } from 'react-toastify';
import { INFO_MESSAGE } from '@/shared/constants/info-message';
import { TOAST_ID } from '@/shared/constants/toast-id';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [content, setContent] = useState(todo.content);
  const [isEditMode, setIsEditMode] = useState(false);

  const { mutate: deletedTodoMutate } = useDeleteTodoMutation();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const handleClickCheckbox = async () => {
    updateTodoMutate({ todoId: todo.id, isDone: !todo.isDone });
  };

  const handleClickDelete = async () => {
    deletedTodoMutate(todo.id);
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
    updateTodoMutate({ todoId: todo.id, content });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <li>
      <form
        onSubmit={handleClickEditComplete}
        className='flex h-[40px] items-center justify-between gap-6 py-2'
      >
        <div className='flex w-full items-center gap-3'>
          <Checkbox
            checked={todo.isDone ?? false}
            onCheckedChange={handleClickCheckbox}
          />
          <input
            type='text'
            value={content}
            onChange={handleChangeInput}
            disabled={!isEditMode}
            className={`w-full bg-transparent outline-none ${isEditMode && 'border-b-2 border-gray-400'}`}
          />
        </div>

        {isEditMode ? (
          <Button size='sm' aria-label='수정 완료'>
            수정 완료
          </Button>
        ) : (
          <div className='flex gap-3 text-gray-500'>
            <button
              type='button'
              aria-label='수정'
              onClick={handleClickEdit}
              className='hover:text-primary'
            >
              <FaPencil />
            </button>
            <button
              type='button'
              aria-label='삭제'
              onClick={handleClickDelete}
              className='hover:text-primary'
            >
              <FaRegTrashCan />
            </button>
          </div>
        )}
      </form>
    </li>
  );
};

export default TodoItem;
