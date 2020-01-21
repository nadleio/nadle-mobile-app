import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

function BottomBar({ theme }) {
  return (
    <Container>
      <TouchableOpacity>
        <Icon color={theme.styled.ICON} name="outline-clapping" size={20} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon color={theme.styled.ICON} name="outline-comment-alt" size={20} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon color={theme.styled.ICON} name="outline-bookmark" size={20} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon color={theme.styled.ICON} name="outline-share" size={20} />
      </TouchableOpacity>
    </Container>
  );
}

export default withTheme(BottomBar);
