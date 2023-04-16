import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TOURNEY = gql`
  mutation addTourney($organizer: ID, $tourneyName: String!, $description: String!, $game: String!, $startTime: String!) {
    addTourney(organizer: $organizer, tourneyName: $tourneyName, description: $description, game: $game, startTime: $startTime) {
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

export const ADD_PLAYER = gql`
  mutation addPlayer($tourneyId: ID, $userId: ID) {
    addPlayer(tourneyId: $tourneyId, userId: $userId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
