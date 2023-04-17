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
      organizer {
        _id
        email
        username
      }
      tourneyName
      description
      game
      startTime
      players {
        _id
        email
        username
     }
    }
  }
`;

export const QUERY_SINGLE_TOURNEY = gql`
  query getSingleTourney($tourneyId: ID!) {
    tourney(tourneyId: $tourneyId) {
      _id
      tourneyName
      organizer {
        _id
        email
        username
      }
    }
  }
`;