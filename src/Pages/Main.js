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

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  text-decoration: none;
  transform: rotate(90deg) translateX(-70%);
  z-index: 100;

  transition: all 0.5s ease;
`;

const Projects = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(-90deg) translateX(50%);
  text-decoration: none;
  z-index: 100;

  transition: all 0.5s ease;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 100;
  text-decoration: none;
  transition: all 0.5s ease;
`;
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 100;
  text-decoration: none;
  transition: all 0.5s ease;
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
          <h2>Email me</h2>
        </Contact>

        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>

        <Projects to="/projects">
          <h2>Projects</h2>
        </Projects>

        <BottomBar>
          <About to="/about">
            <h2>About</h2>
          </About>
          <Skills to="/skills">
            <h2>Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
