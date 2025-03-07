"use client";

import Button from "./ui/Button";
import { Todos } from "./types";
import { JSON_URL } from "@/constants/constants";
import { useState } from "react";

const TodoItem = ({ todo }: { todo: Todos }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleCompleteState = async () => {
    await fetch(`${JSON_URL}/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !todo.isCompleted }),
    });

    setIsCompleted((prev) => !prev);
  };

  return (
    <div className="flex justify-between px-5 items-center w-[390px] h-[60px] border-solid border-2 border-gray-300">
      <h1>{todo.title}</h1>
      <Button
        color="blue"
        size="small"
        type="button"
        onClick={handleCompleteState}
      >
        {isCompleted ? "취소" : "완료"}
      </Button>
    </div>
  );
};

export default TodoItem;
