'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import React from 'react';
import { TODO_STATUS } from '../constants/todo-status';

interface Prop {
  todoStatus: keyof typeof TODO_STATUS;
  onChange: (value: keyof typeof TODO_STATUS) => void;
}

const TodoStatusSelect = ({ todoStatus, onChange }: Prop) => {
  return (
    <Select value={todoStatus} onValueChange={onChange}>
      <SelectTrigger className='h-[30px] w-[100px]'>
        <SelectValue placeholder='완료 상태' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={TODO_STATUS.ALL}>전체</SelectItem>
          <SelectItem value={TODO_STATUS.INCOMPLETE}>미완료</SelectItem>
          <SelectItem value={TODO_STATUS.COMPLETED}>완료</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TodoStatusSelect;
