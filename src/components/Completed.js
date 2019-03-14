import React from "react";

const Completed = ({ completed, deleteCompleted, deleteAllDone }) => {
  const completedTodo = completed.length
    ? completed.map(todo => {
        return (
          <div key={todo.id}>
            <ul>
              <li>{todo.text}</li>
            </ul>
            <button onClick={() => deleteCompleted(todo.id)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        );
      })
    : null;

  return (
    <React.Fragment>
      <div>
        {completed.length ? <h3>Completed</h3> : <h3>No completed ToDo's</h3>}
        {completed.length > 1 ? (
          <button onClick={() => deleteAllDone()}>
            <i class="far fa-times-circle" />
          </button>
        ) : null}

        {completedTodo}
      </div>
    </React.Fragment>
  );
};

export default Completed;
