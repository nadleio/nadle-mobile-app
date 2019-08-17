import React from "react";

import { ScrollView } from "react-native";

import { SafeAreaView } from "react-navigation";
import { ListItem } from "react-native-elements";
import styled from "styled-components";

import { ViewFlex } from "../assets/styles/styles";
import { Header } from "../components/Header";

const organizations = [
  {
    name: "Facebook",
    image: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
  },
  {
    name: "Javascript",
    image: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
  },
  {
    name: "Node",
    image: "https://nadle-assets.nyc3.digitaloceanspaces.com/pp.jpg"
  }
];

function MyOrganizations(props) {
  return (
    <ViewFlex>
      <SafeAreaView backgroundColor="white" />
      <Header
        back={() => props.navigation.goBack()}
        backBool={true}
        text="Organizations"
      />

      <ScrollView>
        {organizations.map((data, i) => (
          <ListItem
            leftAvatar={{ source: { uri: data.image } }}
            rightSubtitle="Leave"
            rightSubtitleStyle={{ color: "red" }}
            bottomDivider={true}
            key={i}
            title={data.name}
            onPress={() => props.navigation.navigate(data.view)}
          />
        ))}
      </ScrollView>
    </ViewFlex>
  );
}

export default MyOrganizations;
