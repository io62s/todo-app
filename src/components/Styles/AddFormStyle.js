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

const FormWrapper = styled.div`
  width: 100%;
  height: 3rem;
  margin: 3rem auto;
  background: ${darkBlueRed};
  border-radius: 1.5rem;
  ${elevation[2]};
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 87%;
  border: none;
  outline: none;
  color: ${mainOrange};
  border-radius: 1.25rem;
  padding-left: 1.2rem;
  background-color: ${darkBlueRed};
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  &::placeholder {
    color: ${lightGrey};
  }
`;

export { FormWrapper, Form, Input };