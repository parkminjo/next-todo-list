import { ENV } from '@/shared/constants/env';
import { METHOD } from '@/shared/constants/http-method';
import { ERROR_MESSAGE } from '@/shared/constants/error-message';
import type { Todo } from '@/features/todo/types/todo.type';

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
