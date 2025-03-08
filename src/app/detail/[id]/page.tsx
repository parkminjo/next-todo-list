"use client";

import { fetchDetailData } from "@/api/todos";
import { Todos } from "@/components/types";
import { Typography } from "@/components/ui/Typography";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TodoDetail = () => {
  const params = useParams();
  const todoId = typeof params.id === "string" ? params.id : undefined;

  const [todo, setTodo] = useState<Todos | null>();

  useEffect(() => {
    if (!todoId) return;

    const fetchDetailTodo = async (todoId: string) => {
      const data = await fetchDetailData(todoId);
      setTodo(data);
    };

    fetchDetailTodo(todoId);
  }, [todoId]);

  return (
    <div>
      <Typography>{todo?.title}</Typography>
    </div>
  );
};

export default TodoDetail;
