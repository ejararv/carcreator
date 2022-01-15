import React from "react";
import styled from "styled-components";

const CarElement = ({ children, setElement, color, ...props }) => {
  return (
    <Element
      style={color}
      {...props}
      onClick={() => {
        setElement();
      }}
    >
      {children}
    </Element>
  );
};
const Element = styled.li`
  list-style: none;
  margin: 2px;
  position: relative;
  padding: 0.3vh 0.5vw;
  background: #808080;
  border-radius: 0.5rem;
  padding: 1rem;
  border: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  cursor: default;
  &:hover {
    background: red;
  }
`;

export default CarElement;
