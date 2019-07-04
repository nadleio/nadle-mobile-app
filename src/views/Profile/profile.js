import React from "react";
import { ScrollView } from "react-native";

import { ViewFlex } from "../../assets/styles/styles";
import { ProfileContent } from "../../components/ProfileContent";

function Profile(props) {
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
          viewPost={() =>
            props.navigation.push("Post", {
              id: 1
            })
          }
        />
      </ScrollView>
    </ViewFlex>
  );
}

export default Profile;
