import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components";

import ActionLink from "./ActionLink";
import Tags from "./Tags";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const Thumbnail = styled.Image`
  border-radius: 4px;
  margin-right: 8px;
  height: 64px;
  width: 64px;
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

const ShortPost = ({ theme }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => console.log("ACTION")}>
        <Thumbnail
          source={{ uri: "https://source.unsplash.com/user/anckor" }}
        />
      </TouchableOpacity>

      <Content>
        <ActionLink to={() => console.log("ACTION")} text="@python" />

        <TouchableOpacity onPress={() => console.log("ACTION")}>
          <Text
            style={{
              marginTop: 4,
              lineHeight: 20,
              fontSize: theme.fontSize.BODY
            }}
          >
            <DateText>May 16, 2018</DateText>
            <Separator>{" • "}</Separator>
            <PostTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PostTitle>
          </Text>
        </TouchableOpacity>

        <TagsContainer>
          <Tags
            tags={[{ text: "Hola" }, { text: "Nadle" }]}
            postUid="H03d947"
          />
        </TagsContainer>
      </Content>
    </Container>
  );
};

export default withTheme(ShortPost);
