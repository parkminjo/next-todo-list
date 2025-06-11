import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateTodo } from '@/features/todo/api/update-todo';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] }),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
