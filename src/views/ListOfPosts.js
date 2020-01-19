import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import _ from "lodash";

import Header from "../components/Header";
import ShortPost from "../components/ShortPost";
import { Label } from "../components/Text";
import UserInfo from "../components/ListOfPosts/UserInfo";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function ListOfPost({ navigation }) {
  const posts = navigation.state.params.account || { posts: [] };

  return (
    <Container>
      <Header back={() => navigation.goBack()} title="Posts" />

      <ScrollView>
        <View style={{ margin: 16 }}>
          <UserInfo account={posts} />

          {posts.posts.length > 0 ? (
            posts.posts.map(data => (
              <ShortPost
                key={data.id}
                title={data.title}
                coverUrl={data.coverPostUrl}
              />
            ))
          ) : (
            <Label>Not post here yet</Label>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}

export default ListOfPost;
