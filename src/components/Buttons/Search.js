import React from "react";
import { MaterialIndicator as Spinner } from "react-native-indicators";
import styled from "styled-components";

import IconComponent from "../Icon";

const Container = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 14px;
  background-color: ${props => props.theme.colors.PRIMARY};
  justify-content: center;
  align-items: center;
`;

function SearchButton({ disabled, action, isLoading }) {
  return (
    <Container disabled={disabled} onPress={() => action()}>
      {isLoading ? (
        <Spinner size={14} animationDuration={1400} color="white" />
      ) : (
        <IconComponent color="white" size={16} name="outline-search" />
      )}
    </Container>
  );
}

export default SearchButton;
