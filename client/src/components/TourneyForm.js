import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TOURNEY } from '../utils/mutations';
import { QUERY_TOURNEYS } from '../utils/queries';

import Auth from '../utils/auth';

const TourneyForm = () => {
  const [tourneyName, setTourneyName] = useState('');

  

  const [addTourney, { error }] = useMutation(ADD_TOURNEY, {
    update(cache, { data: { addTourney } }) {
      try {
        const { tourneys } = cache.readQuery({ query: QUERY_TOURNEYS });

        cache.writeQuery({
          query: QUERY_TOURNEYS,
          data: { tourneys: [addTourney, ...tourneys] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTourney({
        variables: {
          tourneyName,
          // description,
          // game,
          // startTime,
          organizer: Auth.getProfile().data.username,
        },
      });

      setTourneyName('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'tourneyName' && value.length <= 280) {
      setTourneyName(value);
      
    }
  };

  return (
    <div>
      <h3>Create a Toruney</h3>

      {Auth.loggedIn() ? (
        <>
          {/* <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p> */}
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="tourneyName"
                placeholder="Name"
                value={tourneyName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Tourney
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TourneyForm;
