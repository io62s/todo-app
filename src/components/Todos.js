import React from "react";
import * as Buttons from "./Styles/Buttons";
// import moment from "moment";

const { CheckedBtn, RemoveBtn, ClearAllBtn } = Buttons;

const Todos = ({ todos, deleteTodo, completedTodo, deleteAll }) => {
  const todo = todos.length
    ? todos.map(todo => {
        return (
          <div key={todo.id}>
            <ul>
              <li>{todo.text}</li>
            </ul>
            <CheckedBtn onClick={() => completedTodo(todo.id)}>
              <i className="fas fa-check" />
            </CheckedBtn>
            <RemoveBtn onClick={() => deleteTodo(todo.id)}>
              <i className="fas fa-trash-alt" />
            </RemoveBtn>
            {/* <span>Created: {moment().calendar()}</span> */}
          </div>
        );
      })
    : null;

  return (
    <React.Fragment>
      <div>
        {todos.length ? <h3>ToDo's</h3> : <h3>No ToDo's</h3>}
        {todos.length > 1 ? (
          <ClearAllBtn onClick={() => deleteAll()}>
            <i className="far fa-times-circle" />
          </ClearAllBtn>
        ) : null}
        {todo}
      </div>
    </React.Fragment>
  );
};

export default Todos;
