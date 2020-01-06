import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

import useTheme from "../../lib/utils/useTheme";

import NadleColorLogo from "../../assets/images/editable-main-nadle.svg";
import NadleWhiteLogo from "../../assets/images/main-nadle-white.svg";

const ContainerTag = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
`;

const Container = styled.View`
  padding: 16px;
  padding-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

const IconContainer = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme.styled.HASHTAG_FEED};
  justify-content: center;
  align-items: center;
`;

function Header({ isOpen }) {
  const { themeMode } = useTheme();

  return (
    <Container>
      {themeMode === "DARK_MODE" ? (
        <NadleWhiteLogo height={40} width={133} />
      ) : (
        <NadleColorLogo height={40} width={133} />
      )}

      <ContainerTag onPress={() => isOpen()}>
        <IconContainer>
          <Icon name="outline-hashtag" color="black" size={16} />
        </IconContainer>
      </ContainerTag>
    </Container>
  );
}

export default Header;
