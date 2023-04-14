const { AuthenticationError } = require('apollo-server-express');
const { User, Tourney } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('username');
    },
    tourneys: async () => {
      return (Tourney.find().populate('tourneyName'))
    },
    organizer: async ({ tourney }) => {
      return (Tourney.findone({ tourney }).populate('organizer'))
    },
    players: async ({ tourneyName }) => {
      return Tourney.findOne({ tourneyName }).populate('players');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addTourney: async (parent, { organizer, tourneyName, description, game, startTime}) => {
      const tourney = await Tourney.create({ organizer, tourneyName, description, game, startTime:new Date(startTime)});
      return tourney;
    },
    addPlayer: async (parent, { tourneyId, player }) => {
      return Thought.findOneAndUpdate(
        { _id: tourneyId },
        {
          $addToSet: { players: { player } },
        },
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
