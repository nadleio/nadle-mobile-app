import styled from "styled-components";

export const PaddingBox = styled.View`
  padding: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  background-color: ${props => props.background || "white"};
  border-radius: ${props => props.radius || "0"};
`;

export const ActivityBox = styled(PaddingBox)`
  border-top-width: 1px;
  border-color: #f4f4f4;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const JustifyCenter = styled.View`
  align-items: center;
`;

export const FlexEnd = styled(FlexRow)`
  width: 45%;
  justify-content: space-between;
`;

export const SpaceBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const RecentActivityCount = styled.View`
  height: 21px;
  width: 21px;
  background-color: #43485e;
  border-radius: 10.5px;
  margin-left: 3%;
  justify-content: center;
`;

export const SmallCircle = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${props => props.color || "#d6d6d6"};
  border-radius: 5px;
  margin-left: 3%;
`;

export const ContentBox = styled.View`
  padding-left: 3%;
  width: 88%;
  margin-top: 7px;
`;

export const CommentLine = styled.View`
  width: 3;
  background-color: #e6e6e6;
  height: 290;
`;

export const ActivityBoxSeccion = styled.View`
  padding-left: 5%;
  padding-right: 5%;
  justify-content: center;
  height: 50;
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
