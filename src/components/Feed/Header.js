import React from "react";
import styled from "styled-components";

import useTheme from "../../lib/utils/useTheme";

import NadleColorLogo from "../../assets/images/editable-main-nadle.svg";
import NadleWhiteLogo from "../../assets/images/main-nadle-white.svg";

const Container = styled.View`
  padding: 16px;
  padding-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

function Header() {
  const { themeMode } = useTheme();

  return (
    <Container>
      {themeMode === "DARK_MODE" ? (
        <NadleWhiteLogo height={40} width={133} />
      ) : (
        <NadleColorLogo height={40} width={133} />
      )}
    </Container>
  );
}

export default Header;
