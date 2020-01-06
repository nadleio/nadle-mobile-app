import React, { useState } from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components";

import { Label, Title } from "../Text";
import Icon from "../Icon";

import OrganizationList from "./OrganizationList";

const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 12px 0 12px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

function Organization({ theme, setOrganization, organization }) {
  const [open, setOpen] = useState(false);

  function setValues(data) {
    setOrganization(data);
    setOpen(false);
  }

  return (
    <View>
      <Title style={{ marginBottom: 12 }}>Post in</Title>

      <Container onPress={() => setOpen(!open)}>
        <Label numberOfLines={1}>{organization.name}</Label>

        <Icon
          style={{ marginLeft: 12 }}
          name="replace"
          color={theme.styled.CONTENT}
          size={18}
        />
      </Container>

      {open && (
        <OrganizationList
          close={() => setOpen(false)}
          setValues={data => setValues(data)}
        />
      )}
    </View>
  );
}

export default withTheme(Organization);
