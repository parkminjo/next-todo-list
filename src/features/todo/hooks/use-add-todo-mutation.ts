import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/features/todo/api/client/add-todo';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] }),
  });
};
