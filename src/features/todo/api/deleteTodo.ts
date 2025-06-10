import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import type { Todo } from '@/features/todo/types/todo.type';

export const deleteTodo = async (todoId: Todo['id']) => {
  const response = await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
    method: METHOD.DELETE,
  });
  if (!response.ok) {
    throw new Error('todo를 삭제하는데 실패하였습니다.');
  }
};
