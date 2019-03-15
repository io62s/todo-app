import * as colors from "./colors";
import styled from "styled-components";

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

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${darkBluePurple};
  color: ${lightGrey};
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 4rem;
  min-width: 450px;
  min-height: 100vh;
`;
