import React, { useState, useRef, useEffect } from "react";
import { StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { withTheme } from "styled-components";

import SideMenu from "react-native-side-menu";

import { Container } from "./styled";

import Header from "../../components/Feed/Header";
import SwipperContent from "../../components/Feed/SwiperContent";
import Menu from "../../components/Feed/SideMenu";
import Post from "../../components/Feed/Post";

function Feed({ navigation, theme }) {
  const inputRef = useRef("refComponent");
  const [isOpen, setIsOpen] = useState(false);

  function goToProfile(account) {
    navigation.navigate("SearchProfile", {
      account
    });
  }

  function navigate(route, id) {
    navigation.navigate(route, {
      id
    });
  }

  useEffect(() => {
    navigation.setParams({
      scrollToTop: scrollToTop
    });
  }, []);

  function scrollToTop() {
    inputRef.current.scrollTo({ x: 0, y: 0, animated: true });
  }

  return (
    <SideMenu
      autoClosing={false}
      onMove={() => setIsOpen(false)}
      isOpen={isOpen}
      menu={<Menu />}
    >
      <Container>
        <SafeAreaView backgroundColor={theme.styled.BACKGROUND} />
        <StatusBar barStyle={theme.styled.STATUS_BAR} />

        <ScrollView ref={inputRef}>
          <Header isOpen={() => setIsOpen(!isOpen)} />

          <SwipperContent goToProfile={data => goToProfile(data)} />

          <Post
            post={id => navigate("Post", id)}
            comments={id => navigate("Comments", id)}
            profile={account => goToProfile(account)}
          />
        </ScrollView>
      </Container>
    </SideMenu>
  );
}

export default withTheme(Feed);
