import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { View, TouchableOpacity } from "react-native";

import { withSelf } from "../../lib/ContextSelf";

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 24px 0;
  padding: 0 16px;
`;

const Count = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  text-align: center;
  margin-bottom: 4px;
`;

const Label = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.SMALL};
  font-weight: 400;
  text-align: center;
`;

const SubscribeButtonUser = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.PRIMARY};
  border-radius: 4;
  height: 24px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
`;

const SubscribeButtonOrg = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SubscribeButtonAction = styled.TouchableOpacity`
  background-color: ${props => props.background || "#0479f7"};
  height: 24px;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
`;

/**
 * Component used for user profile accounts
 */

function User({ self, account, ...props }) {
  const selfAccount = self.uid === account.uid;
  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginHorizontal: selfAccount ? 16 : 8 }}>
          <TouchableOpacity onPress={() => {}}>
            <Count>540k</Count>
            <Label>subscribers</Label>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: selfAccount ? 16 : 8 }}>
          <TouchableOpacity onPress={() => {}}>
            <Count>520</Count>
            <Label>subscriptions</Label>
          </TouchableOpacity>
        </View>
      </View>

      {!selfAccount && (
        <View style={{ marginTop: 24 }}>
          <SubscribeButtonUser onPress={() => {}}>
            <Label
              style={{
                color: props.theme.colors.WHITE,
                fontSize: props.theme.fontSize.BODY,
                fontWeight: "600"
              }}
            >
              SUBSCRIBE
            </Label>
          </SubscribeButtonUser>
        </View>
      )}
    </Container>
  );
}

/**
 * Component used for organization profile accounts
 */

function Organization({ self, ...props }) {
  if (self) {
    return (
      <Container>
        <TouchableOpacity onPress={() => {}}>
          <Count>5M</Count>
          <Label>subscribers</Label>
        </TouchableOpacity>
      </Container>
    );
  }

  return (
    <Container>
      <SubscribeButtonOrg>
        <SubscribeButtonAction
          onPress={() => {}}
          style={{ borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }}
        >
          <Label
            style={{
              color: props.theme.colors.WHITE,
              fontSize: props.theme.fontSize.BODY,
              fontWeight: "600"
            }}
          >
            SUBSCRIBE
          </Label>
        </SubscribeButtonAction>

        <SubscribeButtonAction
          onPress={() => {}}
          style={{
            backgroundColor: props.theme.styled.OPPOSITE_BACKGROUND,
            borderBottomRightRadius: 4,
            borderTopRightRadius: 4
          }}
        >
          <Label
            style={{
              color: props.theme.styled.OPPOSITE_TITLE,
              fontSize: props.theme.fontSize.BODY,
              fontWeight: "600"
            }}
          >
            560k
          </Label>
        </SubscribeButtonAction>
      </SubscribeButtonOrg>
    </Container>
  );
}

const SubscribeInfo = {
  User: compose(
    withSelf,
    withTheme
  )(User),
  Organization: compose(
    withSelf,
    withTheme
  )(Organization)
};

export default SubscribeInfo;
