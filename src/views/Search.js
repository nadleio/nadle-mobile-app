import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";

// import { Header } from "../../components/Header";
// // import { TextInputSearch } from "../../components/Form/Input";

import ShortPost from "../components/ShortPost";
import { Title, Label } from "../components/Text";
import SearchResults from "../components/Search/SearchResults";
import SearchButton from "../components/Search/SearchButton";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const Question = styled(Title)`
  font-size: 26px;
  /* margin-top: 30px; */
  font-weight: bold;
  text-align: center;
`;

function Search({ theme }) {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <SafeAreaView backgroundColor={theme.styled.BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <View style={{ padding: 16, flex: 1 }}>
        <SearchButton
          placeholder="Search"
          style={{ width: "100%" }}
          onFocus={() => setModal(true)}
          isFullWidth
        />

        <ScrollView>
          <View style={{ paddingHorizontal: "20%", marginTop: 60 }}>
            <Question>What are</Question>
            <Question>you looking for?</Question>
          </View>

          <View style={{ paddingHorizontal: "4%" }}>
            <Label style={{ marginTop: 16 }} align="center">
              Find your favorities posts, bloggers, hashtags. Just start
              writing!
            </Label>
          </View>

          <Title style={{ marginTop: 60, marginBottom: 16 }}>
            Recently viewed posts
          </Title>

          <ShortPost />
          <ShortPost />
        </ScrollView>
      </View>

      {modal && <SearchResults close={() => setModal(false)} />}
    </Container>
  );
}
export default withTheme(Search);
