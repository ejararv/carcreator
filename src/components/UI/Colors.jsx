import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setColor } from "../../reducers/carReducer";
import { HexColorPicker } from "react-colorful";

const Colors = ({ colors }) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.car.color);
  const [colorRgb, setColorRgb] = useState("#ffffff");
  console.log(color);
  useEffect(() => {
    updateColor();
  }, []);
  const updateColor = () => {
    dispatch(setColor(colorRgb));
  };
  return (
    <ColorsContainer>
      {/* {colors.map((color, id) => (
        <ColorsCircle
          key={id}
          onClick={() => dispatch(setColor(color))}
          style={{ backgroundColor: color }}
        ></ColorsCircle>
      ))} */}
      <HexColorPicker
        color={colorRgb}
        onChange={(e) => dispatch(setColor(e))}
      />
    </ColorsContainer>
  );
};

export default Colors;
const ColorsContainer = styled.div`
  display: flex;
`;
