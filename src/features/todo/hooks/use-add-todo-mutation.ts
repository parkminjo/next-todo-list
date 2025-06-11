import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { addTodo } from '@/features/todo/api/add-todo';
import type { Todo } from '@/features/todo/types/todo.type';

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: (newTodo: Omit<Todo, 'id'>) => {
      queryClient.cancelQueries({ queryKey: [QUERY_KEY.TODO_LIST] });
      const previousTodoList = queryClient.getQueriesData<Todo[]>({
        queryKey: [QUERY_KEY.TODO_LIST],
      });

      queryClient.setQueryData([QUERY_KEY.TODO_LIST], (old: Todo[] = []) => {
        return [...old, newTodo];
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
