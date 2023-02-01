import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
