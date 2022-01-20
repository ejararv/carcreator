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
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  list-style: none;
  margin: 2px;
  position: relative;
  padding: 0.3vh 0.5vw;
  border-radius: 0.5rem;
  padding: 1rem;
  color: aliceblue;
  font-size: 1rem;
  font-weight: bold;
  cursor: default;
  &:hover {
    background: red;
  }
`;

export default CarElement;
