import React from "react";
import { View, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import { compose } from "redux";
import styled, { css, withTheme } from "styled-components";

import HeaderSubscribe from "./HeaderSubscribe";
import Icon from "../Icon";

import { withNadleTheme } from "../../lib/ContextTheme";
import { withSelf } from "../../lib/ContextSelf";

import DEFAULT_PROFILE from "../../assets/images/defaultProfile.png";

const Actions = styled.View`
  width: 320px;
  margin: 16px auto;
  justify-content: space-between;
  flex-direction: row;

  ${props =>
    props.width <= 320 &&
    css`
      width: auto;
      margin: 16px;
    `}
`;

const IconContainer = styled.View`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
`;

const HeaderBackground = styled.ImageBackground`
  height: 210px;
  width: 100%;
  position: absolute;
`;

const ProfileBox = styled.View`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  border-radius: 8;
  width: 320px;
  margin: 0 auto;
  padding-top: 16px;

  ${({ themeName }) =>
    themeName === "LIGHT_MODE" &&
    css`
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
    `}

  ${props =>
    props.width <= 320 &&
    css`
      width: auto;
      margin: 0 16px;
    `}
`;

const ProfilePicture = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  margin-bottom: 8px;
  background-color: #fff;
`;

const DisplayName = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 8px;
`;

const Username = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
`;

function Header({ account = {}, self, theme, appTheme, ...props }) {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const name = account.firstName + " " + account.lastName;

  console.log(account.name);

  return (
    <View style={{ flex: 1 }}>
      <HeaderBackground
        source={{ uri: "https://source.unsplash.com/random" }}
      />

      <SafeAreaView>
        <Actions width={screenWidth}>
          {props.back ? (
            <TouchableOpacity onPress={() => props.back()}>
              <IconContainer>
                <Icon
                  size={20}
                  color={theme.styled.ICON}
                  name="outline-caret-left"
                />
              </IconContainer>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {account.uid === self.uid ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => {}} style={{ marginRight: 8 }}>
                <IconContainer>
                  <Icon
                    size={20}
                    color={theme.styled.ICON}
                    name="outline-bell"
                  />
                </IconContainer>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <IconContainer>
                  <Icon
                    size={20}
                    color={theme.styled.ICON}
                    name="outline-cog"
                  />
                </IconContainer>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <IconContainer>
                <Icon size={20} color={theme.styled.ICON} name="solid-more" />
              </IconContainer>
            </TouchableOpacity>
          )}
        </Actions>

        <ProfileBox themeName={appTheme.themeMode} width={screenWidth}>
          <View style={{ alignItems: "center" }}>
            <ProfilePicture
              source={
                account.picture ? { uri: account.picture } : DEFAULT_PROFILE
              }
            />

            <DisplayName
              onPress={() => !account.firstName && props.goToEditProfile()}
            >
              {account.firstName ? name : "Enter your name here"}
            </DisplayName>
            <Username>{account.username}</Username>
          </View>

          {account.type === "USER" ? (
            <HeaderSubscribe.User account={account} />
          ) : (
            <HeaderSubscribe.Organization account={account} />
          )}
        </ProfileBox>
      </SafeAreaView>
    </View>
  );
}

export default compose(
  withSelf,
  withTheme,
  withNadleTheme
)(Header);
