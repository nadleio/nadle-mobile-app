import React from "react";
import styled from "styled-components";

import { Avatar } from "../../assets/styles/Image";
import Input from "../Form/Input";

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin: 20px 0 0 16px;
`;

function Header({ user, setUser, action }) {
  return (
    <HeaderContainer>
      <Avatar source={{ uri: user.photo }} />

      <Input
        onChangeText={text => setUser({ name: text, photo: user.photo })}
        placeholder="Github username"
        returnKeyType="done"
        value={user.name}
        onSubmitEditing={() => action()}
        autoCapitalize="none"
        style={{ marginLeft: 10, borderBottomWidth: 0 }}
      />
    </HeaderContainer>
  );
}

export default Header;
