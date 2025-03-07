import { JSON_URL } from "@/constants/constants";
import TodoItem from "./TodoItem";
import { Todos } from "./types";

const TodoList = async () => {
  const response = await fetch(JSON_URL, {
    cache: "no-cache",
  });
  const todos = await response.json();

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo: Todos) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
