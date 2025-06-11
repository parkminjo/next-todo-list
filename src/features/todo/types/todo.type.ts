export interface Todo {
  id: string;
  content: string;
  isDone: boolean;
  date: Date;
}

export type SelectedDate = Date | undefined;
