import React from "react";
import styled from "styled-components";

const Contrary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20%;
  margin: 16px 0;
`;

const Line = styled.View`
  background-color: #f4f4f4;
  align-self: center;
  height: 2px;
  width: 40%;
`;

const Label = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 600;
  margin: 0 8px;
`;

function Separator({ text }) {
  return (
    <Contrary>
      <Line />
      <Label>{text}</Label>
      <Line />
    </Contrary>
  );
}

export default Separator;
