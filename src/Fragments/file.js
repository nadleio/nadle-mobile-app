import gql from "graphql-tag";

export const uploadFile = gql`
  fragment UploadFile on File {
    id
    url
  }
`;
