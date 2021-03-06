import gql from "graphql-tag";

export const userInformation = gql`
  fragment UserInformation on User {
    id
    username
    email
    avatar
    firstName
    lastName
    biography
    location
    coverAvatar
    link
    followers {
      count
    }
    following {
      count
    }
  }
`;
