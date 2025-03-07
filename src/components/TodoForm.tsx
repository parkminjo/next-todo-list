"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { InputValue } from "./types";
import Button from "./ui/Button";
import { addTodo } from "../api/todos";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState<InputValue>({
    title: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ title: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.title === "") {
      alert("할 일을 입력해주세요");
      return;
    }

    await addTodo({
      ...inputValue,
      id: crypto.randomUUID,
      isCompleted: false,
    });

    setInputValue({
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <input
          type="text"
          placeholder="할 일 입력"
          value={inputValue.title}
          onChange={handleChange}
          className="w-[300px] h-[40px] rounded-lg border-solid border-2 border-gray-300 px-2"
        />
        <Button color="gray" size="medium" type="submit">
          등록
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
