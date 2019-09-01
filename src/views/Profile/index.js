import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import _ from "lodash";

import Header from "../../components/Profile/Header";
import Biography from "../../components/Profile/Biography";
import Members from "../../components/Profile/Members";
import Organizations from "../../components/Profile/Organizations";
import Posts from "../../components/Profile/Posts";
import Buckets from "../../components/Profile/Buckets";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function Profile({ self, navigation }) {
  const account = _.get(navigation, "state.params.account", null) || self;
  const showBack = navigation.state.routeName !== "Profile";

  return (
    <Container>
      <ScrollView>
        <Header
          account={account}
          {...(showBack && { back: () => navigation.goBack() })}
        />

        <Biography account={account} />

        {account.type === "USER" ? <Organizations /> : <Members />}

        <Posts />

        <Buckets />
      </ScrollView>
    </Container>
  );
}

export default Profile;
