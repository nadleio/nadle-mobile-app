import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";

const Container = styled.View`
  margin: 16px 16px 0 16px;
`;

const Title = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Text = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  max-width: 100%;
`;

const ThumbnailsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ThumbnailAction = styled.TouchableOpacity`
  margin-right: 16px;
  margin-bottom: 16px;
`;

const Thumbnail = styled.Image`
  border-radius: 4;
  height: 48px;
  width: 48px;
`;

const Members = props => {
  return (
    <Container>
      <Title>
        <Text>Members (49)</Text>
        <Icon
          style={{ marginLeft: 4 }}
          color={props.theme.styled.ICON}
          name="outline-chevron-double-right"
        />
      </Title>

      <ThumbnailsContainer>
        <ThumbnailAction onPress={() => {}}>
          <Thumbnail source={{ uri: "https://i.pravatar.cc/500" }} />
        </ThumbnailAction>

        <ThumbnailAction onPress={() => {}}>
          <Thumbnail source={{ uri: "https://i.pravatar.cc/500" }} />
        </ThumbnailAction>

        <ThumbnailAction onPress={() => {}}>
          <Thumbnail source={{ uri: "https://i.pravatar.cc/500" }} />
        </ThumbnailAction>

        <ThumbnailAction onPress={() => {}}>
          <Thumbnail source={{ uri: "https://i.pravatar.cc/500" }} />
        </ThumbnailAction>

        <ThumbnailAction onPress={() => {}}>
          <Thumbnail source={{ uri: "https://i.pravatar.cc/500" }} />
        </ThumbnailAction>
      </ThumbnailsContainer>
    </Container>
  );
};

export default withTheme(Members);
