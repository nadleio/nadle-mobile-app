import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import Collapsible from "react-native-collapsible";

import PreviewPost from "../../components/ShortPost";
import ShortBucket from "../../components/ShortBucket";
// import { Header } from "../../components/Header";
import { BucketList } from "../../components/BucketList";
import Icon from "../../components/Icon";
import { Information, Title } from "../../components/Text";
import { CreateBucket } from "../../components/CreateBucket";

import {
  Padding,
  HeaderIconsTouchable,
  HeaderIcons,
  Contrary,
  Lines,
  Container
} from "./styled";

function UserPosts(props) {
  const [filled, setFilled] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [createBucket, setCreateBucket] = useState(false);

  function showBucket() {
    setFilled(!filled);
    setCollapsed(!collapsed);
  }

  return (
    <Container background={props => props.theme.styled.BACKGROUND}>
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      {/* <Header
        backBool={false}
        text="Saved posts"
        buttons={
          <HeaderIcons>
            <HeaderIconsTouchable onPress={() => showBucket()}>
              {filled ? <Icon size={20}></Icon> : <Icon size={20}></Icon>}
            </HeaderIconsTouchable>
          </HeaderIcons>
        }
      /> */}
      <ScrollView>
        <Padding>
          <View style={{ marginTop: 20 }}>
            <Collapsible collapsed={collapsed} align="center">
              <Title>My buckets</Title>

              <View style={{ marginTop: 15 }}>
                <BucketList
                  createNew={() => setCreateBucket(true)}
                  action={() => null}
                  title="React Native"
                />
              </View>

              <Contrary>
                <Lines />
                <Information color="#d9d9d9" size={14}>
                  O
                </Information>
                <Lines />
              </Contrary>

              <Title>General</Title>
            </Collapsible>

            <View style={{ marginTop: 15 }}>
              {/* <PreviewPost
                title="How to get better in your React Native code"
                name="Ricardo Malagon"
                date="10 of march"
                hashtags={["React Native", "React", "GraphQl", "NodeJS", "5+"]}
                viewPost={() =>
                  props.navigation.push("Post", {
                    id: 1
                  })
                }
              /> */}
              <PreviewPost />
            </View>
          </View>

          <ShortBucket
            title="Introduction to React"
            name="Ricardo Malagon"
            posts={() =>
              props.navigation.push("CollectionPosts", {
                title: "Introduction to React"
              })
            }
          />
        </Padding>
      </ScrollView>

      <CreateBucket
        visible={createBucket}
        close={() => setCreateBucket(false)}
      />
    </Container>
  );
}

export default UserPosts;
