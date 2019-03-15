import * as colors from "./colors";
import styled from "styled-components";

const { mainGreen, mainRed, darkGreen, lightGrey } = colors;

const AddButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
  outline: none;
  border: none;
  background: ${mainGreen};
  color: ${lightGrey};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background: ${darkGreen};
  }
`;

const CheckedBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: ${lightGrey};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${mainGreen};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const RemoveBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: ${lightGrey};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${mainRed};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const ClearAllBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  color: ${lightGrey};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${mainRed};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
  &::after {
    content: "Clear all";
    display: inline-block;
    width: 100px;
    font-size: 1rem;
    padding-right: 2rem;
    transform: translateX(-80%);
    opacity: 0;
    color: ${mainRed};
    transition: all 0.3s ease-out;
  }
  &:hover::after {
    transform: translateX(-100%);
    color: ${mainRed};
    opacity: 1;
  }
`;

export { CheckedBtn, RemoveBtn, ClearAllBtn, AddButton };
