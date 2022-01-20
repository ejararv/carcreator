import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../reducers/carReducer";
import { HexColorPicker } from "react-colorful";

const Colors = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.car.color);

  return (
    <>
      <HexColorPicker  color={color} onChange={(e) => dispatch(setColor(e))} />
    </>
  );
};

export default Colors;
