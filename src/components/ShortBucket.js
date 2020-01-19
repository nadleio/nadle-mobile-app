import React from "react";
import styled, { withTheme } from "styled-components";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 16px;
  margin-bottom: 16px;
  align-items: center;
`;

const Thumbnail = styled.Image`
  border-radius: 4px;
  margin-right: 8px;
  height: 24px;
  width: 24px;
  background-color: #f4f4f4;
`;

const Title = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.BODY};
  font-weight: 600;
`;

const ShortBucket = () => {
  return (
    <Container>
      <Thumbnail source={{ uri: "https://source.unsplash.com/random" }} />
      <Title>Lorem ipsum</Title>
    </Container>
  );
};

export default withTheme(ShortBucket);
