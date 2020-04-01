import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";
import { Label } from "../Text";
import shareIt from "../../lib/utils/Share";

const Container = styled.View`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

function BottomBar({ theme }) {
  const [clapFilled, setClapFilled] = useState(false);
  const [bookmarkFilled, setBookmarkFilled] = useState(false);

  return (
    <Container>
      <TouchableOpacity onPress={() => setClapFilled(!clapFilled)}>
        <Icon
          color={theme.styled.ICON}
          name={clapFilled ? "solid-clapping" : "outline-clapping"}
          size={20}
        />
      </TouchableOpacity>

      <IconContainer>
        <Label style={{ marginRight: 4 }}>155</Label>
        <Icon
          style={{ marginLeft: 4 }}
          color={theme.styled.ICON}
          name="outline-comment-alt"
          size={20}
        />
      </IconContainer>

      <TouchableOpacity onPress={() => setBookmarkFilled(!bookmarkFilled)}>
        <Icon
          color={theme.styled.ICON}
          name={bookmarkFilled ? "solid-bookmark" : "outline-bookmark"}
          size={20}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => shareIt("https://google.com")}>
        <Icon color={theme.styled.ICON} name="outline-share" size={20} />
      </TouchableOpacity>
    </Container>
  );
}

export default withTheme(BottomBar);
