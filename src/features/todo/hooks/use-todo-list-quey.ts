import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { getTodoList } from '@/features/todo/api/client/get-todo-list';

export const useTodoListQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: getTodoList,
  });
};
