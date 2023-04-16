import React from 'react';
import { Link } from 'react-router-dom';

const TourneyList = ({ tourneys, title }) => {
  if (tourneys === []) {
    return <h3>No Tourneys Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {tourneys &&
        tourneys.map((tourney) => (
          <div key={tourney._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {tourney.tourneyName} <br />
            </h4>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/tourneys/${tourney._id}`}
            >
              Join a Tourney
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TourneyList;
