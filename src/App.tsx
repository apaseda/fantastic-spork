import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import {Link, Route, Switch} from 'react-router-dom';
import {AllTodos, CreateTodo} from "./pages/index";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="new">Create Todo</Link>
      </nav>
      <h2>Main Landing Page</h2>
      <Switch>
        <Route path="/" exact>
          <AllTodos />
        </Route>
        <Route path='/new'>
          <CreateTodo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
