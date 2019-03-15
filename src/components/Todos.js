import React from "react";
import * as Buttons from "./Styles/Buttons";
// import moment from "moment";
import {
  Heading3,
  TodoWrapper,
  TodoContainer,
  Todo
} from "./Styles/TodosStyle";

const { CheckedBtn, RemoveBtn, ClearAllBtn } = Buttons;

const Todos = ({ todos, deleteTodo, completedTodo, deleteAll }) => {
  const todo = todos.length
    ? todos.map(todo => {
        return (
          <TodoContainer key={todo.id}>
            <Todo>
              <li>{todo.text}</li>
            </Todo>
            <CheckedBtn onClick={() => completedTodo(todo.id)}>
              <i className="fas fa-check" />
            </CheckedBtn>
            <RemoveBtn onClick={() => deleteTodo(todo.id)}>
              <i className="fas fa-trash-alt" />
            </RemoveBtn>
            {/* <span>Created: {moment().calendar()}</span> */}
          </TodoContainer>
        );
      })
    : null;

  return (
    <React.Fragment>
      <TodoWrapper>
        {todos.length ? (
          <Heading3>ToDo's</Heading3>
        ) : (
          <Heading3>No ToDo's</Heading3>
        )}
        {todos.length > 1 ? (
          <ClearAllBtn onClick={() => deleteAll()}>
            <i className="far fa-times-circle" />
          </ClearAllBtn>
        ) : null}
        {todo}
      </TodoWrapper>
    </React.Fragment>
  );
};

export default Todos;
