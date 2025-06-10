import { ENV } from '@/shared/constants/env';
import type { Todo } from '@/features/todo/types/todo.type';
import { METHOD } from '@/shared/constants/http-method';

export const addTodo = async (todo: Omit<Todo, 'id'>) => {
  await fetch(ENV.JSON_SERVER_URL, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
};
