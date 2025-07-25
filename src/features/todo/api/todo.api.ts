import { ENV } from '@/shared/constants/env';
import { ERROR_MESSAGE } from '@/shared/constants/error-message';
import { METHOD } from '@/shared/constants/http-method';
import type { Todo } from '@/features/todo/types/todo.type';

/**
 * getTodoList
 * 할 일을 Json-server에 불러오는 함수
 * @returns {array} todoList 모든 할 일이 담긴 배열
 */
export const getTodoList = async (): Promise<Todo[]> => {
  try {
    const response = await fetch(ENV.JSON_SERVER_URL);

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.TODO.GET_FAILED);
    }

    const todoList = await response.json();
    return todoList;
  } catch (error) {
    throw error;
  }
};

/**
 * addTodo
 * 할 일을 Json-server에 추가하는 함수
 * @param {object} todo 할 일 정보가 담긴 객체
 */
export const addTodo = async (todo: Omit<Todo, 'id'>) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

/**
 * deleteTodo
 * 할 일을 Json-server에서 삭제하는 함수
 * @param {string} todoId
 */
export const deleteTodo = async (todoId: Todo['id']) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
      method: METHOD.DELETE,
    });

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.TODO.DELETE_FAILED);
    }
  } catch (error) {
    throw error;
  }
};

interface Props {
  todoId: Todo['id'];
  content?: Todo['content'];
  isDone?: Todo['isDone'];
}

/**
 * updateTodo
 * 할 일의 내용과 완료 여부를 수정하는 함수
 * @param {number}  param.todoId
 * @param {string} param.content 할 일 내용
 * @param {boolean} param.isDone 할 일 완료 여부
 */
export const updateTodo = async ({ todoId, content, isDone }: Props) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER_URL}/${todoId}`, {
      method: METHOD.PATCH,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone, content }),
    });

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.TODO.UPDATE_FAILED);
    }
  } catch (error) {
    throw error;
  }
};
