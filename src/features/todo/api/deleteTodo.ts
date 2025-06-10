import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import type { Todo } from '@/features/todo/types/todo.type';

export const deleteTodo = async (todoId: Todo['id']) => {
  console.log(todoId);
  await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
    method: METHOD.DELETE,
  });
};
