import React from "react";
import styled, { withTheme } from "styled-components";
import { View } from "react-native";

import IconComponent from "../Icon";

const Container = styled.View`
  margin: 32px 16px 16px 16px;
`;

const Title = styled.Text`
  color: ${props => props.theme.styled.TITLE};
  font-size: ${props => props.theme.fontSize.TITLE};
  font-weight: 600;
  text-align: left;
  margin-bottom: 8px;
`;

const Content = styled.Text`
  color: ${props => props.theme.styled.CONTENT};
  font-size: ${props => props.theme.fontSize.BODY};
  line-height: 21;
  font-weight: 400;
  text-align: left;
`;

const OtherInfo = styled.View`
  margin-top: 12px;
  flex-direction: row;
`;

const Icon = styled(IconComponent)`
  margin-right: 8px;
  width: 16px;
`;

const Label = styled.Text`
  color: ${props => props.theme.styled.ICON};
  font-size: ${props => props.theme.fontSize.SMALL};
  font-weight: 400;
  text-align: left;
`;

const Biography = props => {
  return (
    <Container>
      <Title>Bio</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ultrices tristique egestas. Praesent sed sollicitudin tortor. Vivamus
        turpis risus, gravida id est vitae, interdum ultrices arcu.
      </Content>

      <View>
        <OtherInfo>
          <Icon
            color={props.theme.styled.ICON}
            size={16}
            name="outline-map-marker-alt"
          />
          <Label>San Francisco, CA</Label>
        </OtherInfo>

        <OtherInfo>
          <Icon color={props.theme.styled.ICON} size={16} name="outline-link" />
          <Label>https://carlosvq.com</Label>
        </OtherInfo>
      </View>
    </Container>
  );
};

export default withTheme(Biography);