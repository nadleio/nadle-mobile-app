import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Action = styled.Text`
  color: ${props => props.theme.colors.PRIMARY};
`;

const ActionLink = ({ to, text }) => {
  return (
    <TouchableOpacity onPress={to}>
      <Action>{text}</Action>
    </TouchableOpacity>
  );
};

export default ActionLink;
