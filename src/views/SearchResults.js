/* eslint-disable import/default */
import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import styled, { withTheme } from "styled-components";
import { SafeAreaView } from "react-navigation";
import Swiper from "react-native-swiper";

import ShortPost from "../components/ShortPost";
import SearchInput from "../components/Search/SearchInput";
import Icon from "../components/Icon";
import { Label } from "../components/Text";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const OptionsContainer = styled.View`
  background-color: ${props => props.theme.styled.BACKGROUND};
  height: 44px;
  margin: 8px -16px 0 -16px;
  flex-direction: row;
  align-items: center;
`;

const OptionsActive = styled.View`
  background-color: ${props =>
    props.color ? props.theme.colors.PRIMARY : props.theme.styled.BACKGROUND};
  height: 2.5px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const options = [
  { id: 0, name: "Blogs" },
  { id: 1, name: "Users" },
  { id: 2, name: "Hashtags" }
];

function SearchResults({ navigation, theme }) {
  const [text, setText] = useState(navigation.state.params.value);
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  function swipe(index) {
    if (index !== active) {
      ref.current.scrollBy(index - active, true);
    }

    setActive(index);
  }

  return (
    <Container>
      <SafeAreaView backgroundColor={theme.styled.BACKGROUND} />
      <StatusBar barStyle={theme.styled.STATUS_BAR} />

      <View style={{ padding: 16, flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginRight: 16 }}
          >
            <Icon
              name="outline-angle-left"
              color={theme.styled.ICON}
              size={28}
            />
          </TouchableOpacity>

          <View style={{ paddingRight: 24 }}>
            <SearchInput
              onChangeText={text => setText(text)}
              placeholder="Search"
              returnKeyType="search"
              onSubmitEditing={() => {}}
              clear={() => setText("")}
              style={{ width: "88%" }}
              value={text}
              isFullWidth={true}
            />
          </View>
        </View>

        <OptionsContainer>
          {options.map(data => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 16,
                marginRight: 32
              }}
              key={data.id}
            >
              <Label
                color={active === data.id && "white"}
                onPress={() => swipe(data.id)}
                style={{ textAlign: "center" }}
                weight={600}
              >
                {data.name}
              </Label>

              <OptionsActive color={active === data.id} />
            </View>
          ))}
        </OptionsContainer>

        <Swiper
          ref={ref}
          onIndexChanged={index => setActive(index)}
          loop={false}
          showsPagination={false}
          index={0}
        >
          <View style={{ marginTop: 32, flex: 1 }}>
            <ShortPost />
            <ShortPost />
            <ShortPost />
          </View>

          <View style={{ marginTop: 32, flex: 1 }}>
            <ShortPost />
            <ShortPost />
          </View>

          <View style={{ marginTop: 32, flex: 1 }}>
            <ShortPost />
          </View>
        </Swiper>
      </View>
    </Container>
  );
}
export default withTheme(SearchResults);
