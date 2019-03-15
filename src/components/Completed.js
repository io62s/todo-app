import React from "react";
import * as Buttons from "./Styles/Buttons";
import {
  Heading3,
  TodoWrapper,
  TodoContainer,
  Todo
} from "./Styles/TodosStyle";

const { RemoveBtn, ClearAllBtn } = Buttons;

const Completed = ({ completed, deleteCompleted, deleteAllDone }) => {
  const completedTodo = completed.length
    ? completed.map(todo => {
        return (
          <TodoContainer key={todo.id}>
            <Todo>
              <li>{todo.text}</li>
            </Todo>
            <RemoveBtn onClick={() => deleteCompleted(todo.id)}>
              <i className="fas fa-trash-alt" />
            </RemoveBtn>
          </TodoContainer>
        );
      })
    : null;

  return (
    <React.Fragment>
      <TodoWrapper>
        {completed.length ? (
          <Heading3>Completed</Heading3>
        ) : (
          <Heading3>No completed ToDo's</Heading3>
        )}
        {completed.length > 1 ? (
          <ClearAllBtn onClick={() => deleteAllDone()}>
            <i class="far fa-times-circle" />
          </ClearAllBtn>
        ) : null}

        {completedTodo}
      </TodoWrapper>
    </React.Fragment>
  );
};

export default Completed;
