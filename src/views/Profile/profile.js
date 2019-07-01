import React from "react";
import { ScrollView } from "react-native";

import { ViewFlex } from "../../assets/styles/styles";
import { ProfileContent } from "../../components/ProfileContent";

function Profile() {
  const subscribeWord = {
    text: "Subscribe",
    count: 250
  };
  return (
    <ViewFlex paddingBottom="0%">
      <ScrollView>
        <ProfileContent
          back={false}
          subscribeCotent={subscribeWord}
          myProfile={true}
        />
      </ScrollView>
    </ViewFlex>
  );
}

export default Profile;
