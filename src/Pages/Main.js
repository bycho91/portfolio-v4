import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Logo, PowerButton, SocialIcons } from "../components";

const MainContainer = styled.section`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 100;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <Logo />
        <SocialIcons />

        <Contact
          target="_blank"
          to={{ pathname: "mailto: bycho1991@gmail.com" }}
        >
          <h3>Email me</h3>
        </Contact>
      </Container>
    </MainContainer>
  );
};

export default Main;
