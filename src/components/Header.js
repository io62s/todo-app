import React from "react";
import * as colors from "./Styles/colors";
import styled from "styled-components";

const { lightRed, mainOrange } = colors;

const Header = () => {
  return (
    <Heading>
      <h1>ToDo List</h1>
    </Heading>
  );
};

const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 3rem;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  color: ${mainOrange};
`;

export default Header;
