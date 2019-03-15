import React from "react";
import * as Buttons from "./Styles/Buttons";
import { TodoWrapper, TodoContainer, Todo } from "./Styles/CompletedStyle";
import { Heading3 } from "./Styles/TodosStyle";

const { RemoveBtn, ClearAllBtn, ClearAll } = Buttons;

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
        {completed.length ? <Heading3>Completed</Heading3> : null}
        {completed.length > 1 ? (
          <ClearAllBtn onClick={() => deleteAllDone()}>
            <ClearAll className="clear">Clear all</ClearAll>
            <i class="far fa-times-circle" />
          </ClearAllBtn>
        ) : null}

        {completedTodo}
      </TodoWrapper>
    </React.Fragment>
  );
};

export default Completed;
