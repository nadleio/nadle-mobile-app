import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components";

const Container = styled.View`
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
`;

const Title = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-weight: 600;
`;

const ShortBucket = () => {
  return (
    <TouchableOpacity onPress={() => console.log("ACTION")}>
      <Container>
        <Thumbnail source={{ uri: "https://source.unsplash.com/random" }} />
        <Title>Lorem ipsum</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default withTheme(ShortBucket);
