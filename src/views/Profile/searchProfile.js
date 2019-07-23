import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { ViewFlex } from "../../assets/styles/styles";
import { ProfileContent } from "../../components/Profile/ProfileContent";
import ActionSheet from "react-native-actionsheet";

function SearchProfile(props) {
  const [myProfile, setMyProfile] = useState(null);
  const [subscribeWord, setSubscribeWord] = useState({
    text: "Subscribe",
    count: 250
  });

  const type = "organization";

  useEffect(() => {
    props.navigation.state.params.id == 1
      ? setMyProfile(true)
      : setMyProfile(false);
  }, []);

  function showActionSheet(id) {
    this.ActionSheet.show();
  }

  report = index => {
    // index == 0 && console.log(index, id);
  };

  function subscribe() {
    subscribeWord.text == "Subscribe"
      ? setSubscribeWord({ text: "Subscribed", count: subscribeWord.count + 1 })
      : setSubscribeWord({
          text: "Subscribe",
          count: subscribeWord.count - 1
        });
  }

  return (
    <ViewFlex paddingBottom="0%">
      <ScrollView>
        <ProfileContent
          goBack={() => props.navigation.goBack()}
          back={true}
          subscribeCotent={subscribeWord}
          subscribe={() => subscribe()}
          myProfile={myProfile}
          actionSheat={() => showActionSheet()}
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
        />
      </ScrollView>

      <ActionSheet
        ref={o => (this.ActionSheet = o)}
        options={["Report", "Cancel"]}
        cancelButtonIndex={1}
        destructiveButtonIndex={1}
        onPress={index => {
          report(index);
        }}
      />
    </ViewFlex>
  );
}

export default SearchProfile;
