import React, { useState } from "react";

import styled from "styled-components";
import { ViewFlex } from "../../assets/styles/styles";

import { TextInput } from "../form/Input";
import { Information } from "../Text";
import { ModalOptions } from "../ModalOptions";

export const Space = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export function SetTable(props) {
  const [row, setRow] = useState("");
  const [column, setColumn] = useState("");

  return (
    <ViewFlex>
      <ModalOptions
        alert={props.alert}
        text="table"
        messagge="Column must be less or equal than 3"
        close={() => props.close()}
        align="flex-end"
        content={
          <Space>
            <TextInput
              onChangeText={text => {
                setRow(text);
                text != "" && this.secondTextInput.focus();
              }}
              width="10%"
              maxLength={1}
              align="center"
              keyboardType="numeric"
              returnKeyType="next"
            />

            <Information size={20}>x</Information>

            <TextInput
              onChangeText={text => {
                setColumn(text);
              }}
              width="10%"
              maxLength={1}
              align="center"
              keyboardType="numeric"
              returnKeyType={
                column != "" && row != "" && Number(column) < 4
                  ? "done"
                  : "next"
              }
              ref={input => {
                this.secondTextInput = input;
              }}
              onEndEditing={() => props.action(row, column)}
            />
          </Space>
        }
      />
    </ViewFlex>
  );
}

SetTable.navigationOptions = { header: null };
