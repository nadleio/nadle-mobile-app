import React, { useState } from "react";
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
  const [offset, setOffset] = useState(0);

  const onScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > offset ? "down" : "up";
    setOffset(currentOffset);
    console.log(direction);
  };

  return (
    <Container>
      <ScrollView onScroll={onScroll}>
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
