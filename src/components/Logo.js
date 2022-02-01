import React from "react";
import styled from "styled-components";

const LogoTitle = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Urbanist", sans-serif;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 100;
`;

const Logo = () => {
  return <LogoTitle>byc</LogoTitle>;
};

export default Logo;
