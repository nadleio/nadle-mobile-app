import React from "react";
import styled, { withTheme } from "styled-components";

const HashtagContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-color: #f4f4f4;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Container = styled.View`
  flex: 1;
  padding: 80px 16px 0 16px;
`;

const Title = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
`;

const Content = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 400;
  margin-left: 8px;
`;

const HashtagLogo = styled.Image`
  height: 20px;
  width: 20px;
  border-radius: 4px;
`;

const Menu = () => (
  <Container>
    <Title>My hashtags</Title>

    <HashtagContainer>
      <HashtagLogo
        source={{
          uri: "https://nadle-assets.nyc3.digitaloceanspaces.com/paisaje.png"
        }}
      />

      <Content>React</Content>
    </HashtagContainer>
  </Container>
);

export default withTheme(Menu);
