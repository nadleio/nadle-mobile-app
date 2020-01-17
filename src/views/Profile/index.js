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
import EditProfile from "../../components/EditProfile/EditProfile";

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function Profile({ self, navigation }) {
  const account = _.get(navigation, "state.params.account", null) || self;
  const showBack = navigation.state.routeName !== "Profile";

  const [editProfile, setEditProfile] = useState(false);

  return (
    <Container>
      <ScrollView>
        <Header
          account={account}
          goToEditProfile={() => setEditProfile(true)}
          {...(showBack && { back: () => navigation.goBack() })}
        />

        <Biography account={account} />

        {/* {account.type === "USER" ? <Organizations /> : <Members />} */}
        {account.type !== "USER" ? <Organizations /> : <Members />}

        <Posts account={account} />

        <Buckets />

        {editProfile && (
          <EditProfile self={self} close={() => setEditProfile(false)} />
        )}
      </ScrollView>
    </Container>
  );
}

export default Profile;
