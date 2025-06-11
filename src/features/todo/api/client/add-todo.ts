import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import { ERROR_MESSAGE } from '@/shared/constants/error-message';
import type { Todo } from '@/features/todo/types/todo.type';

/**
 * addTodo
 * 할 일을 Json-server에 추가하는 함수
 * @param {object} todo 할 일 정보가 담긴 객체
 */
export const addTodo = async (todo: Omit<Todo, 'id'>) => {
  const response = await fetch(ENV.JSON_SERVER_URL, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error(ERROR_MESSAGE.TODO.ADD_FAILED);
  }
};
