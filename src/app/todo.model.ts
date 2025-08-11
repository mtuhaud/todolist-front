export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export interface TodoResponse {
  todos: Todo[],
  count: number
}
