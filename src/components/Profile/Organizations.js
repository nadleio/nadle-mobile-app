import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";
import { Thumbnail } from "../Image";

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

const Organizations = props => {
  return (
    <Container>
      <Title>
        <Text>Organizations (10)</Text>
        <Icon
          style={{ marginLeft: 4 }}
          color={props.theme.styled.ICON}
          name="outline-chevron-double-right"
        />
      </Title>

      <ThumbnailsContainer>
        {[0, 1, 2, 3, 4, 5].map(data => (
          <ThumbnailAction key={data} onPress={() => {}}>
            <Thumbnail
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              }}
            />
          </ThumbnailAction>
        ))}
      </ThumbnailsContainer>
    </Container>
  );
};

export default withTheme(Organizations);
