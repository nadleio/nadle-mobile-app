import React from "react";
import { Text } from "react-native";
import styled, { withTheme } from "styled-components";

import Tags from "./Tags";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 16px;
`;

const Thumbnail = styled.Image`
  border-radius: 4px;
  margin-right: 8px;
  height: 64px;
  width: 64px;
  background-color: #f4f4f4;
`;

const Content = styled.View`
  flex: 1;
`;

const PostTitle = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-weight: 600;
`;

const DateText = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
`;

const Separator = styled.Text`
  color: ${props => props.theme.styled.TITLE};
`;

const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ShortPost = ({ goToPostDetails, theme, ...props }) => {
  return (
    <Container onPress={goToPostDetails}>
      <Thumbnail source={{ uri: props.coverUrl }} />

      <Content>
        <Text
          style={{
            lineHeight: 20,
            fontSize: theme.fontSize.BODY
          }}
        >
          <DateText>{props.createdAt}</DateText>
          <Separator>{" • "}</Separator>
          <PostTitle>{props.title}</PostTitle>
        </Text>

        <TagsContainer>
          {props.tags.map(tag => (
            <Tags key={tag.id} name={tag.name} />
          ))}
        </TagsContainer>
      </Content>
    </Container>
  );
};

export default withTheme(ShortPost);
