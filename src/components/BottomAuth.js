import React from "react";

import styled from "styled-components";
import { Margin } from "../assets/styles/styles";
import { ActionLink } from "../components/Text";

const Lines = styled.View`
  height: 2.5px;
  width: 40%;
  background-color: #f4f4f4;
  align-self: center;
`;

const Contrary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20%;
  padding-left: 20%;
`;

export function BottomAuth(props) {
  return (
    <Margin top={props.top || 15}>
      <Contrary>
        <Lines />
        <ActionLink size={14.5}>OR</ActionLink>
        <Lines />
      </Contrary>

      <Margin top={10}>
        <ActionLink onPress={() => props.action()} color="#0091ff" size={14}>
          {props.text}
        </ActionLink>
      </Margin>
    </Margin>
  );
}
