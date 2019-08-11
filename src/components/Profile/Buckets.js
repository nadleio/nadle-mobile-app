import React from "react";
import styled, { withTheme } from "styled-components";

import Icon from "../Icon";

import ShortBucket from "../ShortBucket";

const Container = styled.View`
  margin: 16px;
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

const ShortBucketsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Buckets = props => {
  return (
    <Container>
      <Title>
        <Text>Buckets (300)</Text>
        <Icon
          style={{ marginLeft: 4 }}
          color={props.theme.styled.ICON}
          name="outline-chevron-double-right"
        />
      </Title>

      <ShortBucketsContainer>
        <ShortBucket />
        <ShortBucket />
        <ShortBucket />
      </ShortBucketsContainer>
    </Container>
  );
};

export default withTheme(Buckets);
