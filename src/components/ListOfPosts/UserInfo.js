import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components";

import { SmallImageProfile } from "../../assets/styles/Image";
import { Label } from "../Text";

const Container = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.styled.CONTENT};
  margin-bottom: 16px;
  opacity: 0.2;
`;

function UserInfo({ account, theme }) {
  return (
    <View>
      <Container>
        <SmallImageProfile
          style={{ marginRight: 8 }}
          source={{ uri: account.avatar }}
        />

        <View>
          <Label weight={600} color={theme.styled.TITLE}>
            {account.firstName} {account.lastName}
          </Label>

          <Label>Posts ({account.posts.length})</Label>
        </View>
      </Container>

      <Divider />
    </View>
  );
}

export default withTheme(UserInfo);
