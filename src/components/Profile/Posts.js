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

function Posts({ account, theme, goToPosts }) {
  const posts = account.posts || [];

  return (
    <Container>
      <Title onPress={goToPosts}>
        <Text>Posts ({posts.length || 0})</Text>
        <Icon
          style={{ marginLeft: 4 }}
          color={theme.styled.ICON}
          name="outline-chevron-double-right"
        />
      </Title>

      {posts.slice(5, 7).map(data => (
        <ShortPost
          key={data.id}
          title={data.title}
          coverUrl={data.coverPostUrl}
        />
      ))}
    </Container>
  );
}

export default withTheme(Posts);
