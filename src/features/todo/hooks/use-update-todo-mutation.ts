import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/features/todo/api/client/update-todo';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] }),
  });
};
