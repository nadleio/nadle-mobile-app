import React from "react";
import styled, { withTheme } from "styled-components";

const Container = styled.View`
  margin: 16px 16px 0 16px;
`;

const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
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
  height: 32px;
  width: 32px;
`;

const Organizations = () => {
  return (
    <Container>
      <Title>
        <Text>Organizations</Text>
      </Title>

      <ThumbnailsContainer>
        <ThumbnailAction onPress={() => {}}>
          <Thumbnail
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            }}
          />
        </ThumbnailAction>
      </ThumbnailsContainer>
    </Container>
  );
};

export default withTheme(Organizations);
