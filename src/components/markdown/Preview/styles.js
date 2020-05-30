import styled from "styled-components";

export const Table = styled.View`
  border-width: 2px;
  border-color: ${props => props.theme.styled.TITLE};
  border-radius: 8px;
  border-bottom-width: 0;
`;

export const TableRow = styled.View`
  border-bottom-width: 2px;
  border-color: ${props => props.theme.styled.TITLE};
  flex-direction: row;
  padding: 10px;
`;

export const TableHeader = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Hr = styled.View`
  background-color: ${props => props.theme.styled.TITLE};
  height: 2px;
  margin-top: 10px;
`;

export const Blockquote = styled.View`
  padding: 3px 20px 3px 20px;
  background-color: transparent;
  border-left-width: 2px;
  border-left-color: ${props => props.theme.colors.PRIMARY};
`;

export const CodeLine = styled.Text`
  color: #c7264e;
  background-color: ${props => props.theme.styled.BOX_BACKGROUND};
`;

export const CodeLineContainer = styled.View`
  background-color: red;
`;

export const ListContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListText = styled.Text`
  margin: -1px 10px 0 10px;
  font-size: ${props => props.size};
  color: ${props => props.theme.styled.TITLE};
  text-align: center;
`;
