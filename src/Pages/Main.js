import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";

import { Logo, PowerButton, SocialIcons } from "../components";
import { YinYang } from "./AllSvgs";
import {ImCool, ImCool2} from 'react-icons/im'

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

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  left: ${props => props.clicked ? '92%' : '50%'};
  top: ${props => props.clicked ? '85%' : '50%'};
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  &>:first-child {
    animation: ${rotate} infinite 5s linear;
  }
`;

const Main = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <Logo />
        <SocialIcons />
        <Center clicked={clicked}>
          <ImCool size={clicked ? '10vw' : '15vw'} onClick={() => handleClick()} />
          <span>click me!</span>
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: "mailto: bycho1991@gmail.com" }}
        >
          <h3>Email me</h3>
        </Contact>

        <Blog to="/blog">
          <h3>Blog</h3>
        </Blog>

        <Projects to="/projects">
          <h3>Projects</h3>
        </Projects>

        <BottomBar>
          <About to="/about">
            <h3>About</h3>
          </About>
          <Skills to="/skills">
            <h3>Skills</h3>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
