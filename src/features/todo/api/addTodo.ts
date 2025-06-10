import { ENV } from '@/shared/constants/env';
import type { Todo } from '@/features/todo/types/todo.type';

export const addTodo = async (todo: Omit<Todo, 'id'>) => {
  await fetch(ENV.JSON_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
};
