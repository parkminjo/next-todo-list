import { ENV } from '@/shared/constants/env';
import { ERROR_MESSAGE } from '@/shared/constants/error-message';
import { TODO_STATUS } from '@/features/todo/constants/todo-status';
import type { Todo } from '@/features/todo/types/todo.type';

/**
 * getTodoList
 * 할 일을 Json-server에 불러오는 함수
 * @returns {array} todoList 모든 할 일이 담긴 배열
 */
export const getTodoList = async (
  todoStatus: keyof typeof TODO_STATUS,
): Promise<Todo[]> => {
  try {
    let query = '';
    if (todoStatus === 'INCOMPLETE') {
      query = '?isDone=false';
    }
    if (todoStatus === 'COMPLETED') {
      query = '?isDone=true';
    }

    const response = await fetch(`${ENV.JSON_SERVER_URL}${query}`);

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.TODO.GET_FAILED);
    }

    const todoList = await response.json();
    return todoList;
  } catch (error) {
    throw error;
  }
};
