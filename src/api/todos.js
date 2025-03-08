import { JSON_URL } from "@/constants/constants";

export const fetchData = async () => {
  try {
    const response = await fetch(JSON_URL);
    const todos = await response.json();

    return todos;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDetailData = async (todoId) => {
  try {
    const response = await fetch(`${JSON_URL}/${todoId}`);
    const todos = await response.json();

    return todos;
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async (newTodo) => {
  try {
    await fetch(JSON_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateCompletedState = async ({ todoId, isCompleted }) => {
  try {
    await fetch(`${JSON_URL}/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !isCompleted }),
    });
  } catch (error) {
    console.error(error);
  }
};
