import React from "react";

import { ScrollView } from "react-native";

import { SafeAreaView } from "react-navigation";
import { ListItem } from "react-native-elements";
import styled from "styled-components";

import { ViewFlex } from "../../assets/styles/styles";
import { Header } from "../../components/Header";

const PersonalConfig = [
  {
    title: "Modifed your profile",
    view: "EditProfile"
  },
  {
    title: "Change password",
    view: "ChangePassword"
  },
  {
    title: "Organizations",
    view: "MyOrganizations"
  }
];

const GeneralConfig = [
  {
    title: "Notifications",
    topDivider: true
  },
  {
    title: "Dark mode",
    topDivider: false
  }
];

const ExtrasForNadle = [
  {
    title: "Invite members",
    topDivider: true,
    view: "ShareNadle"
  },
  {
    title: "Suggestions",
    topDivider: false,
    view: "Suggestions"
  },
  {
    title: "Qualify Nadle",
    topDivider: false
  },
  {
    title: "Help",
    topDivider: false
  },
  {
    title: "Privacy policy",
    topDivider: false
  }
];

const MarginTop = styled.View`
  margin-top: 20px;
`;

function Configuration(props) {
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header
        back={() => props.navigation.goBack()}
        backBool={true}
        text="Actions"
      />

      <ScrollView>
        {PersonalConfig.map((data, i) => (
          <ListItem
            chevron={true}
            bottomDivider={true}
            key={i}
            title={data.title}
            onPress={() => props.navigation.navigate(data.view)}
          />
        ))}

        <MarginTop>
          {GeneralConfig.map((data, i) => (
            <ListItem
              chevron={true}
              topDivider={data.topDivider}
              bottomDivider={true}
              key={i}
              title={data.title}
            />
          ))}
        </MarginTop>

        <MarginTop>
          {ExtrasForNadle.map((data, i) => (
            <ListItem
              chevron={true}
              topDivider={data.topDivider}
              bottomDivider={true}
              key={i}
              title={data.title}
              onPress={() => props.navigation.navigate(data.view)}
            />
          ))}
        </MarginTop>

        <MarginTop>
          <ListItem
            titleStyle={{ textAlign: "center" }}
            topDivider={true}
            bottomDivider={true}
            title={"Log out"}
          />
        </MarginTop>
      </ScrollView>
    </ViewFlex>
  );
}

export default Configuration;
