import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

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
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {tourney.tourneyName} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on
        </span>
      </h3>
      <div>
        <p>Hello world</p> 
    </div>
    </div>
  );
};

export default SingleTourney;
