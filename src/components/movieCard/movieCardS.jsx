import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css';


const MovieCardM = (props) => {
  const { data } = props;

  return (
    <div className="movie-card">
      <Link to={`/streamm/show/${data.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.original_name} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.original_name}</h4>
              <p>{data.first_air_date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardM;
