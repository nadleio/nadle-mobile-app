import React from "react";
import { Text } from "react-native";
import styled, { withTheme } from "styled-components";

const Container = styled.TouchableOpacity`
  background-color: ${props => `${props.theme.colors.PRIMARY}20`};
  border-radius: 4;
  align-self: flex-start;
  max-width: auto;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 2px 6px;
`;

function Tags({ tags, ...props }) {
  return tags.map((tag, index) => (
    <Container key={`${props.postUid}-${index}-tag`}>
      <Text
        style={{
          color: props.theme.colors.PRIMARY,
          textAlign: "center"
        }}
      >
        {tag.text}
      </Text>
    </Container>
  ));
}

export default withTheme(Tags);
