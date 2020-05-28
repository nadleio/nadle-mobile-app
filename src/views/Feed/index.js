import React, { useRef, useEffect } from "react";
import { StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { withTheme } from "styled-components";

import Header from "../../components/Feed/Header";
import SwipperContent from "../../components/Feed/SwiperContent";
import Post from "../../components/Feed/Post";

import { Container } from "./styled";

function Feed({ navigation, theme }) {
  const inputRef = useRef("refComponent");

  useEffect(() => {
    navigation.setParams({
      scrollToTop: scrollToTop
    });
  }, []);

  function goToProfile(account) {
    navigation.navigate("SearchProfile", { account });
  }

  function navigate(route, id) {
    navigation.navigate(route, { id });
  }

  function scrollToTop() {
    inputRef.current.scrollTo({ x: 0, y: 0, animated: true });
  }

  return (
    <Container>
      <SafeAreaView backgroundColor={theme.styled.BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <ScrollView ref={inputRef}>
        <Header />

        <SwipperContent goToProfile={data => goToProfile(data)} />

        <Post
          post={id => navigate("Post", id)}
          comments={id => navigate("Comments", id)}
          profile={account => goToProfile(account)}
        />
      </ScrollView>
    </Container>
  );
}

export default withTheme(Feed);
