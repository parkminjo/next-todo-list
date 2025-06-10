import { ENV } from '@/shared/constants/env';
import type { Todo } from '@/features/todo/types/todo.type';

export const getTodoList = async (): Promise<Todo> => {
  const response = await fetch(ENV.JSON_SERVER_URL);
  if (!response.ok) {
    throw new Error('todoList를 불러오는데 실패하였습니다.');
  }

  const todoList = await response.json();

  return todoList;
};
