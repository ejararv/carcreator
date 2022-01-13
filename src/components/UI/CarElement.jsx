import React from "react";
import styled from "styled-components";

const CarElement = ({ children, ...props }) => {
  return <Element {...props}> {children}</Element>;
};

export default CarElement;

const Element = styled.li`
  list-style: none;
  margin: 2px;
  height: fit-content;
  width: fit-content;
  position: relative;
  padding: 0.3vh 0.5vw;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  padding: 1rem;
  border: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  cursor: default;
  &:hover {
    background: #808080;
  }
  &:after {
    background: #308080;
  }
`;
