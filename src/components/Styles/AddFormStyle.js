import styled from "styled-components";
import * as colors from "./colors";
import elevation from "./elevation";

const {
  lightGrey,

  medRed
} = colors;

const FormWrapper = styled.div`
  width: 100%;
  height: 3rem;
  margin: 3rem auto;
  background: ${medRed};
  border-radius: 1.5rem;
  transition: all 0.3s ease-out;
  ${elevation[1]};
  &:focus-within {
    ${elevation[3]};
  }
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
  color: ${lightGrey};
  font-weight: 600;
  border-radius: 1.25rem;
  padding-left: 1.2rem;
  background-color: transparent;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  &::placeholder {
    color: #fff;
    font-weight: 400;
  }
`;

export { FormWrapper, Form, Input };
