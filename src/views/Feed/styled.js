import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.styled.BACKGROUND};
`;

export const ActivityBox = styled.View`
  border-top-width: 1px;
  border-color: #f4f4f4;
  padding: 5%;
  padding-bottom: 3%;
  background-color: white;
  border-radius: ${props => props.radius || "0"};
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PaddingHorizontal = styled.View`
  padding-left: 5%;
  padding-right: 5%;
`;

export const SpaceBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const JustifyCenter = styled.View`
  align-items: center;
`;

export const ContentBox = styled.View`
  padding-left: 3%;
  width: 88%;
`;

export const CommentLine = styled.View`
  width: 3;
  background-color: #e6e6e6;
  height: 310;
`;

export const ClapBox = styled.View`
  height: 30;
  width: 30;
  border-radius: 15;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: -40;
`;
