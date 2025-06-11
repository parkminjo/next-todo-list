import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteTodo } from '@/features/todo/api/delete-todo';
import { QUERY_KEY } from '@/shared/constants/query-key';
import type { Todo } from '@/features/todo/types/todo.type';

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: (todoId: Todo['id']) => {
      queryClient.cancelQueries({ queryKey: [QUERY_KEY.TODO_LIST] });
      const previousTodoList = queryClient.getQueriesData<Todo[]>({
        queryKey: [QUERY_KEY.TODO_LIST],
      });

      queryClient.setQueryData([QUERY_KEY.TODO_LIST], (old: Todo[] = []) => {
        return old.filter((todo) => todo.id !== todoId);
      });

      return { previousTodoList };
    },
    onError: (error, variables, context) => {
      if (context && context.previousTodoList) {
        queryClient.setQueryData(
          [QUERY_KEY.TODO_LIST],
          context.previousTodoList,
        );
      }
      toast.error(error.message);
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] }),
  });
};
