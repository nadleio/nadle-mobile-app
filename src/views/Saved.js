/* eslint-disable import/default */
import React, { useState, useRef } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-navigation";

import { Label } from "../components/Text";

import ShortPost from "../components/ShortPost";
import Header from "../components/Header";
import Picker from "../components/Saved/Picker";
import ShortBucket from "../components/ShortBucket";
import AddNewBucket from "../components/AddNewBucket";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function UserPosts({ theme }) {
  const ref = useRef(null);

  const [active, setActive] = useState(0);
  const [addBucket, setAddBucket] = useState(false);

  function swipe(index) {
    if (index !== active) {
      ref.current.scrollBy(index - active, true);
    }
    setActive(index);
  }

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      backgroundColor={theme.styled.BOX_BACKGROUND}
    >
      <Container>
        <Header title="Saved Posts" />

        <View style={{ margin: 16, flex: 1 }}>
          <Picker index={active} swipe={index => swipe(index)} />

          <ScrollView>
            <View style={{ marginTop: 24 }}>
              <Swiper
                ref={ref}
                onIndexChanged={index => setActive(index)}
                loop={false}
                showsPagination={false}
                index={0}
              >
                <View style={{ flex: 1 }}>
                  <ShortPost />
                  <ShortPost />
                  <ShortPost />
                </View>

                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={() => setAddBucket(true)}>
                    <Label
                      style={{ marginBottom: 16 }}
                      weight={600}
                      color={theme.styled.TITLE}
                    >
                      Add new bucket
                    </Label>
                  </TouchableOpacity>

                  <ShortBucket />
                  <ShortBucket />
                </View>
              </Swiper>
            </View>
          </ScrollView>
        </View>

        {addBucket && <AddNewBucket close={() => setAddBucket(false)} />}
      </Container>
    </SafeAreaView>
  );
}

export default withTheme(UserPosts);
