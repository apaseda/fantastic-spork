import { createContext, SetStateAction, useState } from "react";
import { Todo, TodoContext } from "../data/interfaces";

interface Props {
  children: React.ReactNode;
}

const defaultState: TodoContext = {
  todos: [],
  totalTodos: 0,
  addTodo: (todo) => {},
  removeTodo: (todoId) => {},
  completeTodo: (todoId) => {},
};

const TodosContext = createContext(defaultState);

const TodosContextProvider = (props: Props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos: any) => {
      return prevTodos.concat(todo);
    });
  };

  const removeTodo = (id: number) =>
    setTodos((prevTodos: any) =>
      prevTodos.filter((todo: Todo) => todo.id !== id)
    );

  const completeTodo = (id: number) =>
    setTodos((prevTodos: any) =>
      prevTodos.map((todo: Todo) => {
        if (todo.id === id) return { ...todo, isCompleted: true };
        return todo;
      })
    );

  const context: TodoContext = {
    todos,
    totalTodos: todos.length,
    addTodo,
    removeTodo,
    completeTodo
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  )
};

export default TodosContextProvider;
