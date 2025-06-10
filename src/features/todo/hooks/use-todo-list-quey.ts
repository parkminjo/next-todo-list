import { useQuery } from '@tanstack/react-query';
import { getTodoList } from '@/features/todo/api/client/get-todo-list';

export const useTodoListQuery = () => {
  return useQuery({
    queryKey: ['todoList'],
    queryFn: getTodoList,
  });
};
