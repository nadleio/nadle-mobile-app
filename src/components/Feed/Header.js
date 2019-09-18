import React from "react";

import styled, { withTheme } from "styled-components";

import Icon from "../Icon";

import NadleColorLogo from "../../assets/images/editable-main-nadle.svg";

const ContentTag = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
`;

const SpaceTag = styled.View`
  padding: 16px;
  padding-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const IconContainer = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${props => props.theme.styled.HASHTAG_FEED};
  justify-content: center;
  align-items: center;
`;

function Header({ isOpen, theme }) {
  return (
    <SpaceTag>
      <NadleColorLogo height={40} width={133} />

      <ContentTag onPress={() => isOpen()}>
        <IconContainer>
          <Icon name="outline-hashtag" color={theme.styled.ICON} size={16} />
        </IconContainer>
      </ContentTag>
    </SpaceTag>
  );
}

export default withTheme(Header);
