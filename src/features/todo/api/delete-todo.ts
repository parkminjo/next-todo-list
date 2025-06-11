import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import { ERROR_MESSAGE } from '@/shared/constants/error-message';
import type { Todo } from '@/features/todo/types/todo.type';

/**
 * deleteTodo
 * 할 일을 Json-server에서 삭제하는 함수
 * @param {string} todoId
 */
export const deleteTodo = async (todoId: Todo['id']) => {
  const response = await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
    method: METHOD.DELETE,
  });

  if (!response.ok) {
    throw new Error(ERROR_MESSAGE.TODO.DELETE_FAILED);
  }
};
