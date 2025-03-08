"use client";

import Button from "./ui/Button";
import { Todos } from "./types";
import { JSON_URL } from "@/constants/constants";
import { useState } from "react";
import { updateCompletedState } from "@/api/todos";
import { Typography } from "./ui/Typography";
import Link from "next/link";

const TodoItem = ({ todo }: { todo: Todos }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleCompleteState = async () => {
    await updateCompletedState({
      todoId: todo.id,
      isCompleted: todo.isCompleted,
    });
    setIsCompleted((prev) => !prev);
  };

  const handleDeleteTodo = async () => {
    await fetch(`${JSON_URL}/${todo.id}`, {
      method: "DELETE",
    });
  };

  return (
    <Link href={`/detail/${todo.id}`}>
      <div className="flex justify-between px-5 rounded-lg items-center w-[390px] h-[60px] border-solid border-2 border-gray-300 hover:bg-gray-300">
        <Typography variant="p">{todo.title}</Typography>
        <div className="flex gap-1">
          <Button color="blue" size="small" onClick={handleCompleteState}>
            {isCompleted ? "취소" : "완료"}
          </Button>
          <Button color="red" size="small" onClick={handleDeleteTodo}>
            삭제
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TodoItem;
