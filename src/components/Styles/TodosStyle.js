import styled from "styled-components";
import * as colors from "./colors";
import elevation from "./elevation";

const {
  lightGrey,
  lightDark,
  mainDark,
  Darkest,
  mainOrange,
  mainGreen,
  darkGreen,
  neonGreen,
  mainRed,
  lightRed,
  medRed,
  medDarkRed,
  darkBlueRed,
  darkBluePurple
} = colors;

const Heading3 = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 3rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.1rem;
  color: ${medRed};
`;

const TodoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  color: ${lightRed};
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
  list-style: none;
  text-transform: capitalize;
`;

export { Heading3, TodoWrapper, TodoContainer, Todo };
