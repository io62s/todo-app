import React from "react";

import moment from "moment";

const Todos = ({ todos, deleteTodo, completedTodo, deleteAll }) => {
  const todo = todos.length
    ? todos.map(todo => {
        return (
          <div className="todoCard" key={todo.id}>
            <ul className="todo">
              <li>{todo.text}</li>
            </ul>
            <button
              className="btn btn-done"
              onClick={() => completedTodo(todo.id)}
            >
              <i className="fas fa-check" />
            </button>
            <button
              className="btn btn-delete"
              onClick={() => deleteTodo(todo.id)}
            >
              <i className="fas fa-trash-alt" />
            </button>
            <span className="date">Created: {moment().calendar()}</span>
          </div>
        );
      })
    : null;

  return (
    <React.Fragment>
      <div className="todo-wrapper">
        {todos.length ? (
          <h3 className="todoH3">ToDo's</h3>
        ) : (
          <h3 className="todoH3">No ToDo's</h3>
        )}
        {todos.length > 1 ? (
          <button className="clr-btn" onClick={() => deleteAll()} />
        ) : null}
        {todo}
      </div>
    </React.Fragment>
  );
};

export default Todos;
