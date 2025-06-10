import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import type { Todo } from '@/features/todo/types/todo.type';

export const addTodo = async (todo: Omit<Todo, 'id'>) => {
  const response = await fetch(ENV.JSON_SERVER_URL, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error('todo를 추가는데 실패하였습니다.');
  }
};
