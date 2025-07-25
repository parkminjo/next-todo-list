import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { STALE_TIME } from '@/shared/constants/time';
import { getTodoList } from '../api/todo.api';

export const useTodoListQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: getTodoList,
    staleTime: STALE_TIME.ONE_MINUTE_IN_MS,
  });
};
