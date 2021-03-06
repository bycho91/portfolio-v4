// Home button to reset the website

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.4);
  }

  & > *:first-child {
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <BiHomeAlt size="1.5rem" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
