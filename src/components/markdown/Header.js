import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";
import { Label } from "../Text";

const IconContent = styled.View`
  justify-content: space-between;
  width: 65%;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  height: 26px;
  padding-left: 6%;
  padding-right: 6%;
  justify-content: center;
  border-radius: 4;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.PRIMARY};
`;

const Header = styled.View`
  justify-content: flex-end;
  border-bottom-color: ${props => props.theme.styled.DIVIDER};
  border-bottom-width: 1px;
  padding: 15px;
  flex-direction: row;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
`;

function HeaderFunction({ theme, setModalDraft, setModal, goToForm, text }) {
  return (
    <Header>
      <IconContent>
        <Icon
          name="outline-eye"
          onPress={setModal}
          color={theme.styled.ICON}
          size={22}
        />

        <Icon name="outline-info-circle" color={theme.styled.ICON} size={22} />

        <Button onPress={setModalDraft} backgroundColor={theme.styled.ICON}>
          <Label color={theme.styled.OPPOSITE_TITLE} size={14}>
            DRAFT
          </Label>
        </Button>

        <Button
          backgroundColor={text === "" && "#b2b2b2"}
          onPress={() =>
            text === "" ? alert("Please write something first") : goToForm()
          }
        >
          <Label color="white" size={14}>
            NEXT
          </Label>
        </Button>
      </IconContent>
    </Header>
  );
}

export default withTheme(HeaderFunction);
