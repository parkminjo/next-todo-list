import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { addTodo, deleteTodo, updateTodo } from '../api/todo.api';
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
        return [...old, { ...newTodo, id: Date.now() }];
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

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: (todoId: Todo['id']) => {
      queryClient.cancelQueries({ queryKey: [QUERY_KEY.TODO_LIST] });
      const previousTodoList = queryClient.getQueriesData<Todo[]>({
        queryKey: [QUERY_KEY.TODO_LIST],
      });

      queryClient.setQueryData([QUERY_KEY.TODO_LIST], (old: Todo[] = []) => {
        return old.filter((todo) => todo.id !== todoId);
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

interface Props {
  todoId: Todo['id'];
  content?: Todo['content'];
  isDone?: Todo['isDone'];
}

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: ({ todoId, content, isDone }: Props) => {
      queryClient.cancelQueries({ queryKey: [QUERY_KEY.TODO_LIST] });
      const previousTodoList = queryClient.getQueriesData<Todo[]>({
        queryKey: [QUERY_KEY.TODO_LIST],
      });

      queryClient.setQueryData([QUERY_KEY.TODO_LIST], (old: Todo[] = []) => {
        return old.map((todo) => {
          return todo.id === todoId ? { ...todo, content, isDone } : todo;
        });
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
