import { JSON_URL } from "@/constants/constants";

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
