import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";

import ShortPost from "../ShortPost";

const Container = styled.View`
  margin: 16px 16px 0 16px;
`;

const Title = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Text = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  max-width: 100%;
`;

const Posts = props => {
  return (
    <Container>
      <Title>
        <Text>Pinned Posts (49)</Text>
        <Icon
          style={{ marginLeft: 4 }}
          color={props.theme.styled.ICON}
          name="outline-chevron-double-right"
        />
      </Title>

      <ShortPost />
      <ShortPost />
    </Container>
  );
};

export default withTheme(Posts);
