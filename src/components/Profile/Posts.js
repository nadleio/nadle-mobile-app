import React from "react";
import styled, { withTheme } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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

const FirstPost = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
`;

const POSTS = gql`
  query($owner_id: ID!, $limit: Int, $offset: Int) {
    postsByUser(owner_id: $owner_id, limit: $limit, offset: $offset) {
      count
      pages
      results {
        id
        title
        body
        coverPostUrl
      }
    }
  }
`;

function Posts({ theme, goToPosts, goToPostDetails, account }) {
  const { data, loading } = useQuery(POSTS, {
    variables: { owner_id: account.id, limit: 5, offset: 0 }
  });

  return (
    <Container>
      <Title onPress={goToPosts}>
        <Text>Posts ({!loading && data.postsByUser.count})</Text>
        <Icon
          style={{ marginLeft: 4 }}
          color={theme.styled.ICON}
          name="outline-chevron-double-right"
        />
      </Title>

      {!loading &&
        data.postsByUser.results.map(data => (
          <ShortPost
            key={data.id}
            title={data.title}
            coverUrl={data.coverPostUrl}
            goToPostDetails={() => goToPostDetails(data)}
          />
        ))}
      {/* ) : (
        <FirstPost>Start your first post!</FirstPost>
      )} */}
    </Container>
  );
}

export default withTheme(Posts);
