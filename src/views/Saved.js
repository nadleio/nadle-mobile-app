import React from "react";
import { ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import ShortPost from "../components/ShortPost";
import Header from "../components/Header";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function UserPosts({ theme }) {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      backgroundColor={theme.styled.BOX_BACKGROUND}
    >
      <Container>
        <Header title="Saved Posts" />

        <View style={{ margin: 16, flex: 1 }}>
          <ScrollView>
            <ShortPost />
            <ShortPost />
            <ShortPost />
          </ScrollView>
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default withTheme(UserPosts);
