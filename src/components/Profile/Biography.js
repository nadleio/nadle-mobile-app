import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components";

import IconComponent from "../Icon";

const Container = styled.View`
  margin: 32px 16px 16px 16px;
`;

const Title = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  text-align: left;
  margin-bottom: 8px;
`;

const Content = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
  line-height: 20;
  font-weight: 400;
  text-align: left;
`;

const OtherInfo = styled.View`
  margin-top: 12px;
  flex-direction: row;
`;

const Icon = styled(IconComponent)`
  margin-right: 8px;
  width: 16px;
`;

const Label = styled.Text`
  color: ${props => props.theme.styled.ICON};
  font-size: ${props => props.theme.fontSize.SMALL};
  font-weight: 400;
  text-align: left;
`;

function Biography({ account, theme }) {
  return (
    <Container>
      <Title>Bio</Title>

      <Content>
        {account.biography ? account.biography : "Nothing here yet."}
      </Content>

      <OtherInfo>
        <Icon
          color={theme.styled.ICON}
          size={16}
          name="outline-map-marker-alt"
        />
        <Label>San Francisco, CA</Label>
      </OtherInfo>

      {account.link && (
        <OtherInfo>
          <Icon color={theme.styled.ICON} size={16} name="outline-link" />

          <TouchableOpacity onPress={() => Linking.openURL(account.link)}>
            <Label>{account.link}</Label>
          </TouchableOpacity>
        </OtherInfo>
      )}
    </Container>
  );
}

export default withTheme(Biography);
