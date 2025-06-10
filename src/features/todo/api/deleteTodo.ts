import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';

export const deleteTodo = async (todoId: string) => {
  console.log(todoId);
  await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
    method: METHOD.DELETE,
  });
};
