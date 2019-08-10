import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";

import Collapsible from "react-native-collapsible";

import { PreviewPost } from "../../components/PreviewPost";
import { PreviewCollection } from "../../components/PreviewCollection";
import { ViewFlex } from "../../assets/styles/styles";
import { Header } from "../../components/Header";
import { BucketList } from "../../components/BucketList";
import { Icon } from "../../components/Icon";
import { Information, Title } from "../../components/Text";
import { CreateBucket } from "../../components/CreateBucket";

import {
  Margintop,
  Padding,
  HeaderIconsTouchable,
  HeaderIcons,
  Contrary,
  Lines
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
    <ViewFlex paddingBottom="0%">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />
      <Header
        backBool={false}
        text="Saved posts"
        buttons={
          <HeaderIcons>
            <HeaderIconsTouchable onPress={() => showBucket()}>
              {filled ? <Icon size={20}></Icon> : <Icon size={20}></Icon>}
            </HeaderIconsTouchable>
          </HeaderIcons>
        }
      />
      <ScrollView>
        <Padding>
          <Margintop margintop={20}>
            <Collapsible collapsed={collapsed} align="center">
              <Title>My buckets</Title>

              <Margintop margintop={15}>
                <BucketList
                  createNew={() => setCreateBucket(true)}
                  action={() => null}
                  title="React Native"
                />
              </Margintop>

              <Contrary>
                <Lines />
                <Information color="#d9d9d9" size={14}>
                  O
                </Information>
                <Lines />
              </Contrary>

              <Title>General</Title>
            </Collapsible>

            <Margintop margintop={15}>
              <PreviewPost
                title="How to get better in your React Native code"
                name="Ricardo Malagon"
                date="10 of march"
                hashtags={["React Native", "React", "GraphQl", "NodeJS", "5+"]}
                viewPost={() =>
                  props.navigation.push("Post", {
                    id: 1
                  })
                }
              />
            </Margintop>
          </Margintop>

          <Margintop>
            <PreviewCollection
              title="Introduction to React"
              name="Ricardo Malagon"
              posts={() =>
                props.navigation.push("CollectionPosts", {
                  title: "Introduction to React"
                })
              }
            />
          </Margintop>
        </Padding>
      </ScrollView>

      <CreateBucket
        visible={createBucket}
        close={() => setCreateBucket(false)}
      />
    </ViewFlex>
  );
}

export default UserPosts;
