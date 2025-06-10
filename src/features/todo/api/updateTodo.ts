import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import type { Todo } from '@/features/todo/types/todo.type';

interface Props {
  todoId: Todo['id'];
  isDone: Todo['isDone'];
}

export const updateTodo = async ({ todoId, isDone }: Props) => {
  const response = await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
    method: METHOD.PATCH,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isDone }),
  });
  if (!response.ok) {
    throw new Error('todo를 수정하는데 실패하였습니다.');
  }
};
