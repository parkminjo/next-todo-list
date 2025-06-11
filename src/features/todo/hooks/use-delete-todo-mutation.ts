import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteTodo } from '@/features/todo/api/delete-todo';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] }),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
