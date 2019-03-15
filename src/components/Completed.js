import React from "react";
import * as Buttons from "./Styles/Buttons";

const { RemoveBtn, ClearAllBtn } = Buttons;

const Completed = ({ completed, deleteCompleted, deleteAllDone }) => {
  const completedTodo = completed.length
    ? completed.map(todo => {
        return (
          <div key={todo.id}>
            <ul>
              <li>{todo.text}</li>
            </ul>
            <RemoveBtn onClick={() => deleteCompleted(todo.id)}>
              <i className="fas fa-trash-alt" />
            </RemoveBtn>
          </div>
        );
      })
    : null;

  return (
    <React.Fragment>
      <div>
        {completed.length ? <h3>Completed</h3> : <h3>No completed ToDo's</h3>}
        {completed.length > 1 ? (
          <ClearAllBtn onClick={() => deleteAllDone()}>
            <i class="far fa-times-circle" />
          </ClearAllBtn>
        ) : null}

        {completedTodo}
      </div>
    </React.Fragment>
  );
};

export default Completed;
