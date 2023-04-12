const { Schema, model } = require('mongoose');

const tourneySchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
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
});

const Tourney = model('Tourney', tourneySchema);

module.exports = Tourney;