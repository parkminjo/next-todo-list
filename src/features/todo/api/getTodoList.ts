import { ENV } from '@/shared/constants/env';

export const getTodoList = async () => {
  const response = await fetch(ENV.JSON_SERVER_URL);
  const todoList = await response.json();

  return todoList;
};
