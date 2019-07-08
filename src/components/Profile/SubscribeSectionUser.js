import React from "react";
import { View } from "react-native";

import { IconsBox } from "../../views/Profile/style";

import { Information } from "../Text";
import { Subscribe } from "../Subscribe";

export function SubscribeSectionUser(props) {
  return (
    <IconsBox paddinghorizontal={props.myProfile ? "10%" : 0}>
      <View>
        <Information
          onPress={() => props.subscriptions("Subscribers")}
          size={16}
          weight={600}
          align={props.align}
        >
          {props.subscribers}
        </Information>

        <Information color="#5c5c5c" size={14} top={1}>
          Subscribers
        </Information>
      </View>

      <View>
        <Information
          onPress={() => props.subscriptions("Subscriptions")}
          size={16}
          weight={600}
          align={props.align}
        >
          520
        </Information>

        <Information color="#5c5c5c" size={14} top={1}>
          Subscriptions
        </Information>
      </View>

      {!props.myProfile && (
        <View>
          <Subscribe onPress={() => props.subscribe()}>
            <Information color="white" size={14}>
              {props.subsText}
            </Information>
          </Subscribe>
        </View>
      )}
    </IconsBox>
  );
}
