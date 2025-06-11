import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { STALE_TIME } from '@/shared/constants/time';
import { getTodoList } from '@/features/todo/api/get-todo-list';
import { TODO_STATUS } from '@/features/todo/constants/todo-status';

export const useTodoListQuery = (todoStatus: keyof typeof TODO_STATUS) => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, todoStatus],
    queryFn: () => getTodoList(todoStatus),
    staleTime: STALE_TIME.ONE_MINUTE_IN_MS,
  });
};
