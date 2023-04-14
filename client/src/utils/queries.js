import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_TOURNEYS = gql`
  query getTourneys {
    tourneys {
      _id
      organizer
      tourneyName
      description
      game
      startTime
      players
    }
  }
`;

