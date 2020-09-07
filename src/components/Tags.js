import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "./Icon";

const Container = styled.TouchableOpacity`
  background-color: ${props => `${props.theme.colors.PRIMARY}20`};
  border-radius: 4;
  align-self: flex-start;
  max-width: auto;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 2px 6px;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.Text`
  color: ${props => props.theme.colors.PRIMARY};
  font-size: ${props => props.theme.fontSize.BODY};
  text-align: center;
`;

function Tags({ hasDelete, action, theme, ...props }) {
  return (
    <Container onPress={action}>
      <Content>{props.name}</Content>

      {hasDelete && (
        <Icon
          style={{ marginLeft: 8, fontSize: 16 }}
          color={theme.styled.ICON}
          name="remove"
        />
      )}
    </Container>
  );
}

export default withTheme(Tags);
