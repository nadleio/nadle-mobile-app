import React from "react";
import { ScrollView, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

import Header from "../components/Post/Header";
import BottomBar from "../components/Post/BottomBar";
import MarkDownView from "../components/markdown/Preview/MarkDownView";
import PostInfo from "../components/Post/PostInfo";

import FadeInView from "../components/AnimateView";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const Cover = styled.Image`
  height: 250px;
  background-color: #f4f4f4;
`;

function Post({ navigation, theme }) {
  const content = navigation.state.params.data;
  console.log(content);

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      backgroundColor={theme.styled.BOX_BACKGROUND}
    >
      <Container>
        <Header isVisible back={() => navigation.goBack()} />

        <FadeInView>
          <ScrollView contentOffset={{ x: 0, y: 110 }}>
            <Cover source={{ uri: content.coverPostUrl }} />

            <View style={{ margin: 16 }}>
              <PostInfo content={content} />
              <MarkDownView content={content.body} />
            </View>
          </ScrollView>
        </FadeInView>

        <BottomBar />
      </Container>
    </SafeAreaView>
  );
}

export default withTheme(Post);
