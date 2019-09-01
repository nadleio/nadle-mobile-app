import React from "react";
import { SafeAreaView } from "react-native";
import styled, { withTheme } from "styled-components";
import LinearGradient from "react-native-linear-gradient";

import NadleWhiteLogo from "../../assets/images/editable-main-nadle--white.svg";
import ShapesBackground from "../../assets/images/header__shapes.svg";

const Container = styled.View`
  flex: 1;
`;

const LogoContainer = styled.View`
  margin: 56px 16px 0 16px;
`;

const AbsoluteContainer = styled.View`
  position: absolute;
`;

const Background = styled(LinearGradient)`
  height: 184px;
`;

function AuthHeader(props) {
  return (
    <Container>
      <Background
        colors={[props.theme.colors.PRIMARY, props.theme.colors.SECONDARY]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <AbsoluteContainer>
          <ShapesBackground />
        </AbsoluteContainer>

        <SafeAreaView>
          <LogoContainer>
            <NadleWhiteLogo width={144} height={42} />
          </LogoContainer>
        </SafeAreaView>
      </Background>
    </Container>
  );
}

export default withTheme(AuthHeader);
