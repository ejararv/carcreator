import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setColor } from "../../reducers/carReducer";
import { data } from "./../../data/data";

const Colors = () => {
  const dispatch = useDispatch();

  console.log([..."#a09e9f"].slice(1).join(""));
  return (
    <ColorsContainer>
      {data.colors.map((color, id) => (
        <ColorsCircle
          key={id}
          onClick={() => dispatch(setColor(color))}
          style={{ backgroundColor: color }}
        ></ColorsCircle>
      ))}
    </ColorsContainer>
  );
};

export default Colors;
const ColorsContainer = styled.div`
  display: flex;
`;
const ColorsCircle = styled.div`
  height: 36px;
  width: 36px;
  margin-left: 0.5em;
  border-radius: 18px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid #aaa;
  cursor: pointer;
`;
