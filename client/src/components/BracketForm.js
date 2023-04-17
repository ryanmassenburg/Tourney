import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_TOURNEY } from '../utils/mutations';

const BracketForm = ({ tourneyId }) => {
  const [players, setPlayer] = useState('');
 
  const [addPlayer, { error }] = useMutation(ADD_TOURNEY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPlayer({
        variables: {
          tourneyId,
          players,
        },
      });

      setPlayer('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'player1') {
      setPlayer(value);
    }
  };

  return (
    <div>
      <h4>Quaterfinals</h4>
          <form
            
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
            <div className="col-12 col-lg-2">
              <input
                name="player1"
                placeholder="add player"
                value={players}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-2">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Player
              </button>
            </div>
          </form>
    </div>
  );
};

export default BracketForm;
