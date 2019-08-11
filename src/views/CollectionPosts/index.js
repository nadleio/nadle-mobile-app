import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";

import { PreviewPost } from "../../components/ShortPost";
import { ViewFlex } from "../../assets/styles/styles";
import { Header } from "../../components/Header";

import { Margintop, Padding } from "./styled";

function CollectionPosts(props) {
  return (
    <ViewFlex paddingBottom="0%">
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />

      <Header
        backBool={true}
        back={() => props.navigation.goBack()}
        text={props.navigation.state.params.title}
      />

      <ScrollView>
        <Padding>
          <Margintop>
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
        </Padding>
      </ScrollView>
    </ViewFlex>
  );
}

export default CollectionPosts;
