import * as colors from "./colors";
import styled from "styled-components";

const { lightDark, mainGreen, lightGrey, neonGreen, lightRed } = colors;

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
  bottom: 0.2rem;
  right: 3.7rem;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 30px;
  -moz-outline-radius: 100%;
  font-size: 1.2rem;
  color: ${lightDark};
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${neonGreen};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const RemoveBtn = styled.button`
  position: absolute;
  bottom: 0.2rem;
  right: 0.8rem;
  background: none;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: ${lightDark};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${lightRed};
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
  right: 2rem;
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
    color: ${lightRed};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &:hover .clear {
    opacity: 1;
    transform: translateX(-20%);
  }
`;

const ClearAll = styled.div`
  font-size: 1rem;
  transform: translateX(0);
  opacity: 0;
  transition: all 0.3s ease-out;
`;

export { CheckedBtn, RemoveBtn, ClearAllBtn, AddButton, ClearAll };
