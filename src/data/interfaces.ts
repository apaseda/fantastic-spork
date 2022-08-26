export type Todo = {
    id: number,
    text: string,
    isCompleted?: boolean
}

export interface TodoContext {
  todos: Todo[],
  totalTodos: number,
  addTodo: (todo: Todo) => void,
  removeTodo: (todoId: number) => void,
  completeTodo: (todoId: number) => void,
};