import React from 'react';
import { Link } from 'react-router-dom';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import BracketForm from '../components/BracketForm';

import { QUERY_SINGLE_TOURNEY } from '../utils/queries';

const SingleTourney = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tourneyId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TOURNEY, {
    // pass URL parameter
    variables: { tourneyId: tourneyId },
  });

  const tourney = data?.tourney || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      {Auth.loggedIn() ? (
        <>
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {tourney.tourneyName} <br />
        <span style={{ fontSize: '1rem' }}>
        {tourney.organizer.username}
        </span>
      </h3>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <BracketForm tourneyId={tourney._id} />
      </div>
    </>
     ) : (
      <p>
        You need to be logged in to create a Tourney. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    )}
    </div>
  );
};

export default SingleTourney;
