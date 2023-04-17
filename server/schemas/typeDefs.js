const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Tourney {
    _id: ID
    organizer: User!
    tourneyName: String
    description: String
    game: String
    startTime: String
    players: [User!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    organizer(organizer: String!): Tourney
    tourneys: [Tourney]
    tourney(tourneyId: ID!): Tourney
    players(players: String!): Tourney
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addTourney(organizer: ID, tourneyName: String!, description: String!, game: String!, startTime: String!): Tourney
    addPlayer(tourneyId: ID, userId: ID): Tourney
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
