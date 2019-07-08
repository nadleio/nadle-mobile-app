import React from "react";
import { View } from "react-native";

import { OrganizationSubs } from "../../views/Profile/style";

import { Information } from "../Text";
import { SubscribeOrganization } from "../Subscribe";

export function SubscribeSectionOrganization(props) {
  return (
    <OrganizationSubs>
      <View>
        <SubscribeOrganization
          leftRadius="4px"
          disabled={props.myProfile ? true : false}
          onPress={() => props.subscribe()}
        >
          {props.myProfile ? (
            <Information color="white" size={14}>
              Subscribers
            </Information>
          ) : (
            <Information color="white" size={14}>
              {props.subsText}
            </Information>
          )}
        </SubscribeOrganization>
      </View>

      <View>
        <SubscribeOrganization
          background="#1d2a32"
          rightRadius="4px"
          onPress={() => props.subscriptions("Subscribers")}
        >
          <Information color="white" size={14}>
            {props.subscribers}
          </Information>
        </SubscribeOrganization>
      </View>
    </OrganizationSubs>
  );
}
