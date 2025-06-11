import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addTodo } from '@/features/todo/api/add-todo';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] }),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
