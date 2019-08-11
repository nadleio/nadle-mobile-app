import React from "react";
import { Text } from "react-native";
import styled, { withTheme } from "styled-components";

const Container = styled.TouchableOpacity`
  padding: 2px 6px;
  background-color: ${props => `${props.theme.colors.PRIMARY}20`};
  border-radius: 4;
  max-width: auto;
  align-self: flex-start;
`;

function Tag(props) {
  return (
    <Container>
      <Text
        style={{
          color: props.theme.colors.PRIMARY,
          fontSize: 14,
          textAlign: "center"
        }}
      >
        {props.text}
      </Text>
    </Container>
  );
}

export default withTheme(Tag);
