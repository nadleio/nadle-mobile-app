import React from "react";
import { View } from "react-native";

import { OrganizationSubs } from "../../views/Profile/styled";
import { Information } from "../Text";
import { SubscribeOrganization } from "../Subscribe";

export function SubscribeSectionOrganization(props) {
  return (
    <View>
      {props.myProfile ? (
        <View>
          <Information
            onPress={() => props.subscriptions("Subscribers")}
            size={16}
            weight={600}
            align="center"
            top={12}
          >
            173K
          </Information>

          <Information color="#5c5c5c" size={14} top={1} align="center">
            Subscribers
          </Information>
        </View>
      ) : (
        <OrganizationSubs>
          <View>
            <SubscribeOrganization
              leftRadius="4px"
              onPress={() => props.subscribe()}
            >
              <Information color="white" size={14}>
                {props.subsText}
              </Information>
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
      )}
    </View>
  );
}
