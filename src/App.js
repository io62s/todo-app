import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Completed from "./components/Completed";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    completed: []
  };

  ///add new todo
  addTodos = todo => {
    todo.id = Date.now();

    const todos = [...this.state.todos, todo];

    this.setState({
      todos
    });
  };

  //delete todo from todos
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  //delete completed todos
  deleteCompleted = id => {
    const completed = this.state.completed.filter(todo => {
      return todo.id !== id;
    });
    console.log(completed);

    this.setState({
      completed
    });
  };

  ///move checked todo to completed todos list
  completedTodo = completed => {
    const todos = this.state.todos.filter(todo => {
      return todo.id === completed;
    });

    const todoss = this.state.todos.filter(todo => {
      return todo.id !== completed;
    });

    this.setState({
      todos: todoss,
      completed: this.state.completed.concat(todos)
    });
  };
  ///clear list/////////////
  deleteAll = () => {
    this.setState({
      todos: []
    });
  };

  deleteAllDone = () => {
    this.setState({
      completed: []
    });
  };
  ////////////////////////
  render() {
    return (
      <div className="container">
        <Header />

        <div className="wrapper">
          <Todos
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            deleteAll={this.deleteAll}
            completedTodo={this.completedTodo}
          />

          <Completed
            completed={this.state.completed}
            deleteCompleted={this.deleteCompleted}
            deleteAllDone={this.deleteAllDone}
          />

          <AddTodo addTodos={this.addTodos} />
        </div>
      </div>
    );
  }
}

export default App;
