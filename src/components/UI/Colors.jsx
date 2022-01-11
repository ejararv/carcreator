import React from "react";
import styled from "styled-components";

const Colors = () => {
  const colorsExamples = [
    " #000000",
    "#0d4671",
    "#63803a",
    "#841210",
    "#a09e9f",
  ];

  console.log([..."#a09e9f"].slice(1).join(""));
  return (
    <ColorsContainer class="colors">
      {colorsExamples.map((color, id) => (
        <ColorsCircle
          class="color"
          style={{ backgroundColor: color }}
          data-hex={[...color].slice(1).join("")}
        ></ColorsCircle>
      ))}
      {/* <ColorsCircle
        class="color"
        style={{ backgroundColor: " #000000" }}
        data-hex="000000"
      ></ColorsCircle>
      <ColorsCircle
        class="color"
        style={{ backgroundColor: "#0d4671" }}
        data-hex="0d4671"
      ></ColorsCircle>
      <ColorsCircle
        class="color"
        style={{ backgroundColor: "#63803a" }}
        data-hex="63803a"
      ></ColorsCircle>
      <ColorsCircle
        class="color"
        style={{ backgroundColor: "#841210" }}
        data-hex="841210"
      ></ColorsCircle>
      <ColorsCircle
        class="color"
        style={{ backgroundColor: "#a09e9f" }}
        data-hex="none"
      ></ColorsCircle> */}
      <input
        id="customColour"
        class="color jscolor"
        onchange="update(this.jscolor)"
        data-hex=""
      />
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
