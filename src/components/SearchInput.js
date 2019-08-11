import React from "react";
import styled, { withTheme } from "styled-components";

const Input = styled.TextInput`
  background-color: ${props => props.theme.colors.GREY_LIGHTER};
  height: 40px;
`;

const SearchInput = props => {
  return <Input />;
};

export default withTheme(SearchInput);
