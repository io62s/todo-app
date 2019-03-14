import React from "react";

const Completed = ({ completed, deleteCompleted, deleteAllDone }) => {
  const completedTodo = completed.length
    ? completed.map(todo => {
        return (
          <div className="todoCard-comp" key={todo.id}>
            <ul className="todo-comp">
              <li>{todo.text}</li>
            </ul>
            <button
              className="btn btn-delete"
              onClick={() => deleteCompleted(todo.id)}
            />
          </div>
        );
      })
    : null;

  return (
    <React.Fragment>
      <div className="completed-wrapper">
        {completed.length ? (
          <h3 className="todoH3-c">Completed</h3>
        ) : (
          <h3 className="todoH3-c">No completed ToDo's</h3>
        )}
        {completed.length > 1 ? (
          <button className="clr-btn" onClick={() => deleteAllDone()} />
        ) : null}

        {completedTodo}
      </div>
    </React.Fragment>
  );
};

export default Completed;
