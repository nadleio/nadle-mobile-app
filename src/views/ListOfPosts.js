import React, { Fragment } from "react";
import { View, FlatList } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import Header from "../components/Header";
import ShortPost from "../components/ShortPost";
import { Label } from "../components/Text";
import UserInfo from "../components/ListOfPosts/UserInfo";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function ListOfPost({ navigation, theme }) {
  const posts = { posts: [] };

  function Item({ item }) {
    return (
      <ShortPost
        key={item.id}
        title={item.title}
        coverUrl={item.coverPostUrl}
      />
    );
  }

  return (
    <Fragment>
      <SafeAreaView backgroundColor={theme.styled.BOX_BACKGROUND} />
      <SafeAreaView
        style={{ flex: 1 }}
        backgroundColor={theme.styled.BACKGROUND}
      >
        <Container>
          <Header back={() => navigation.goBack()} title="Posts" />

          <View style={{ margin: 16, flex: 1 }}>
            <FlatList
              data={posts.posts}
              renderItem={({ item }) => <Item item={item} />}
              ListEmptyComponent={() => <Label>Empty List</Label>}
              ListHeaderComponent={() => <UserInfo account={posts} />}
              scrollToIndex={{ params: { index: 7 } }}
            />
          </View>
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}

export default withTheme(ListOfPost);
