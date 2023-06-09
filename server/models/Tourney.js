const { Schema, model } = require('mongoose');

const tourneySchema = new Schema({
  organizer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  tourneyName: {
    type: String,
    required: true,
//    unique: true,
  },
  description: {
    type: String,
  },
  game: {
    type: String,
    required: true,
    minlength: 1,
  },
  startTime: {
    type: Date,
    required: true,
  },
  players: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Tourney = model('Tourney', tourneySchema);

module.exports = Tourney;