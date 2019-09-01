import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Action = styled.Text`
  color: ${props => props.theme.colors.LINK};
  font-weight: 600;
`;

const ActionLink = ({ to, text, style }) => {
  return (
    <TouchableOpacity onPress={to}>
      <Action style={style}>{text}</Action>
    </TouchableOpacity>
  );
};

export default ActionLink;
