import * as colors from "./colors";
import styled from "styled-components";

const { mainDark, lightGrey, darkBluePurple } = colors;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${mainDark};
  color: ${lightGrey};
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: 2rem;
  min-width: 450px;
  height: 100vh;
`;
