import React from "react";
import { Modal } from "react-native";
import styled, { withTheme } from "styled-components";
import { MaterialIndicator as Spinner } from "react-native-indicators";

const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Box = styled.View`
  height: 80px;
  width: 80px;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

function Loading({ theme }) {
  return (
    <Modal transparent={true} visible={true}>
      <ModalContainer>
        <Box>
          <Spinner
            size={32}
            animationDuration={1400}
            color={theme.colors.PRIMARY}
          />
        </Box>
      </ModalContainer>
    </Modal>
  );
}

export default withTheme(Loading);
