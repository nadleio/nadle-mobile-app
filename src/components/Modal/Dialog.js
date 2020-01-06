import React from "react";
import { Modal, KeyboardAvoidingView, Platform } from "react-native";
import styled, { withTheme } from "styled-components";
import * as Animatable from "react-native-animatable";

import { Label } from "../Text";
import Icon from "../Icon";

const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
`;

const Container = styled.View`
  padding: 20px;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  border-radius: 8px;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  padding: 5px 10px 20px 10px;
`;

const IconContent = styled.TouchableOpacity`
  right: 0;
  top: 5px;
  position: absolute;
`;

const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

function Dialog({ close, text, children, animation, theme }) {
  return (
    <Modal transparent={true} visible={true}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" && "padding"}
      >
        <ModalContainer>
          <Animatable.View animation={animation} duration={350}>
            <Container>
              <Header>
                <TitleContainer>
                  <Label color={props => props.theme.styled.TITLE}>
                    {text.toUpperCase()}
                  </Label>
                </TitleContainer>

                <IconContent onPress={() => close()}>
                  <Icon name="replace" color={theme.styled.ICON} size={16} />
                </IconContent>
              </Header>

              {children}
            </Container>
          </Animatable.View>
        </ModalContainer>
      </KeyboardAvoidingView>
    </Modal>
  );
}

Modal.navigationOptions = { header: null };
export default withTheme(Dialog);
