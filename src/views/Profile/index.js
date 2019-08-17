import React from "react";
import { ScrollView } from "react-native";

import { ViewFlex } from "../../assets/styles/styles";
import { ProfileContent } from "../../components/Profile/ProfileContent";

function Profile(props) {
  const subscribeWord = {
    text: "Subscribe",
    count: 250
  };
  const type = "user";

  return (
    <ViewFlex paddingBottom="0%">
      <ScrollView>
        <ProfileContent
          back={false}
          subscribeCotent={subscribeWord}
          myProfile={true}
          type={type}
          subscriptions={type =>
            props.navigation.push("Subscriptions", {
              type: type
            })
          }
          viewPost={() =>
            props.navigation.push("Post", {
              id: 1
            })
          }
          goToProfile={() => props.navigation.push("SearchProfile")}
          seeAllPosts={() => props.navigation.push("UserPosts")}
          collection={() =>
            props.navigation.push("CollectionPosts", {
              title: "Introduction to React"
            })
          }
          notifications={() => props.navigation.push("Notifications")}
          config={() => props.navigation.push("Configuration")}
        />
      </ScrollView>
    </ViewFlex>
  );
}

export default Profile;
