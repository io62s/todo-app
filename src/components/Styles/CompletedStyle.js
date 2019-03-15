import * as colors from "./colors";
import styled from "styled-components";

const { lightDark } = colors;

const TodoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  color: ${lightDark};
`;
const TodoContainer = styled.div`
  position: relative;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  border-bottom: 1px solid ${lightDark};
`;
const Todo = styled.div`
  padding: 1rem 0 0.5rem 0.6rem;
  margin-top: 1.4rem;
  font-weight: 700;
  list-style: none;
  text-decoration: line-through;
  text-transform: capitalize;
`;

export { TodoWrapper, TodoContainer, Todo };
