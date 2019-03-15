import * as colors from "./colors";
import styled from "styled-components";

const {
  mainGreen,
  mainRed,
  darkGreen,
  lightGrey,
  mainDark,
  lightDark,
  neonGreen
} = colors;

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
  transition: all 0.2s ease-out;
  &:hover {
    background: ${neonGreen};
  }
`;

const CheckedBtn = styled.button`
  position: absolute;
  width: 30px;
  bottom: -0.8rem;
  right: 3.7rem;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 30px;
  -moz-outline-radius: 100%;
  font-size: 1.5rem;
  color: ${lightDark};
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${neonGreen};
    outline: 2px solid ${neonGreen};
    outline-offset: 0.2rem;
    -moz-outline-radius: 100%;
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const RemoveBtn = styled.button`
  position: absolute;
  bottom: -0.8rem;
  right: 0.8rem;
  background: none;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: ${lightDark};
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
  position: absolute;
  top: 2rem;
  right: -4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  color: ${lightDark};
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
