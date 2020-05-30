import React, { Fragment } from "react";
import { Linking, TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components";

import IconComponent from "../Icon";
import Button from "../Button";

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

function Biography({ account, theme, setEditProfile }) {
  const isCompleted = Boolean(
    account.biography || account.location || account.link
  );

  return (
    <Container>
      {!isCompleted ? (
        <Button
          action={setEditProfile}
          text="COMPLETE PROFILE"
          color={[theme.styled.BOX_BACKGROUND, theme.styled.BOX_BACKGROUND]}
          textColor="#fff"
        />
      ) : (
        <Fragment>
          {account.biography && (
            <>
              <Title>Bio</Title>
              <Content>{account.biography}</Content>
            </>
          )}

          {account.location && (
            <OtherInfo>
              <Icon
                color={theme.styled.ICON}
                size={16}
                name="outline-map-marker-alt"
              />
              <Label>{account.location}</Label>
            </OtherInfo>
          )}

          {account.link && (
            <OtherInfo>
              <Icon color={theme.styled.ICON} size={16} name="outline-link" />

              <TouchableOpacity onPress={() => Linking.openURL(account.link)}>
                <Label>{account.link}</Label>
              </TouchableOpacity>
            </OtherInfo>
          )}
        </Fragment>
      )}
    </Container>
  );
}

export default withTheme(Biography);
