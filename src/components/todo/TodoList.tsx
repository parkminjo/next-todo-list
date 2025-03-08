'use client';

import { fetchData } from '@/api/todos';
import TodoItem from './TodoItem';
import { Todos } from '../types';
import { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await fetchData();
      setTodos(todos);
    };

    fetchTodos();
  }, [todos]);

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo: Todos) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
