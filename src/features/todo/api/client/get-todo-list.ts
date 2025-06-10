import { ENV } from '@/shared/constants/env';
import { ERROR_MESSAGE } from '@/shared/constants/error-message';
import type { Todo } from '@/features/todo/types/todo.type';

export const getTodoList = async (): Promise<Todo[]> => {
  const response = await fetch(ENV.JSON_SERVER_URL);

  if (!response.ok) {
    throw new Error(ERROR_MESSAGE.TODO.GET_FAILED);
  }

  const todoList = await response.json();
  return todoList;
};
