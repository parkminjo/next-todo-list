'use client';

import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPencil } from 'react-icons/fa6';
import { useUpdateTodoMutation } from '@/features/todo/hooks/use-update-todo-mutation';
import { useDeleteTodoMutation } from '@/features/todo/hooks/use-delete-todo-mutation';
import { Checkbox } from '@/shared/ui/checkbox';
import type { Todo } from '@/features/todo/types/todo.type';
import { useState } from 'react';
import { Button } from '@/shared/ui/button';

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

    setIsEditMode(false);
    updateTodoMutate({ todoId: todo.id, content });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <li className='flex h-[40px] items-center justify-between rounded-lg px-4 py-2'>
      <form
        onSubmit={handleClickEditComplete}
        className='flex items-center gap-3'
      >
        <Checkbox checked={todo.isDone} onCheckedChange={handleClickCheckbox} />
        <input
          type='text'
          value={content}
          onChange={handleChangeInput}
          disabled={!isEditMode}
        />
      </form>

      {isEditMode ? (
        <Button type='submit' size='sm' aria-label='수정 완료'>
          수정 완료
        </Button>
      ) : (
        <div className='flex gap-3 text-gray-500'>
          <button type='button' aria-label='수정' onClick={handleClickEdit}>
            <FaPencil />
          </button>
          <button type='button' aria-label='삭제' onClick={handleClickDelete}>
            <FaRegTrashCan />
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
