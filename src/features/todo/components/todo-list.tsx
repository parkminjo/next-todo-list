'use client';

import { useState } from 'react';
import { Skeleton } from '@/shared/ui/skeleton';
import { useTodoListQuery } from '@/features/todo/hooks/use-todo-list-quey';
import { getDateHeader } from '@/features/todo/utils/get-date-header';
import TodoItem from '@/features/todo/components/todo-item';
import TodoStatusSelect from '@/features/todo/components/todo-status-select';
import { TODO_STATUS } from '@/features/todo/constants/todo-status';
import type { SelectedDate } from '@/features/todo/types/todo.type';

interface Props {
  selectedDate: SelectedDate;
}

const TodoList = ({ selectedDate }: Props) => {
  const [todoStatus, setTodoStatus] = useState<keyof typeof TODO_STATUS>(
    TODO_STATUS.ALL,
  );
  const { data: todoList, isPending, isError, error } = useTodoListQuery();

  const handleChangeSelect = (value: keyof typeof TODO_STATUS) => {
    setTodoStatus(value);
  };

  if (isPending) {
    return (
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Today TODO</h2>
        <Skeleton className='h-[40px] w-full' />
        <Skeleton className='h-[40px] w-full' />
        <Skeleton className='h-[40px] w-full' />
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  // 기존에는 서버에 필터링된 데이터를 불러오도록 구현했는데,
  // 카테고리를 선택할 때 서버에 요청에 보내기 때문에 로딩 UI가 보이는 문제가 있었습니다.
  // 사용자 경험 측면에서 클라이언트에서 필터링해주는 것이 사용자 경험에서 더 좋을 것 같다는 판단을 하였습니다.
  const selectedDateTodoList = todoList.filter((todo) => {
    if (selectedDate) {
      const isSameDate =
        getDateHeader(todo.date) === getDateHeader(selectedDate);
      return isSameDate;
    }
  });

  const filteredTodoList = selectedDateTodoList.filter((todo) => {
    switch (todoStatus) {
      case TODO_STATUS.COMPLETED:
        return todo.isDone;
      case TODO_STATUS.INCOMPLETE:
        return !todo.isDone;
      case TODO_STATUS.ALL:
      default:
        return true;
    }
  });

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-sm'>
          Today TODO
          <span className='ml-2 rounded-full bg-gray-200 px-2 text-xs text-gray-400'>
            {filteredTodoList.length}
          </span>
        </h2>
        <TodoStatusSelect
          todoStatus={todoStatus}
          onChange={handleChangeSelect}
        />
      </div>
      <ul className='flex flex-col gap-2'>
        {filteredTodoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
