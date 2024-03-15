import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.css';


const MovieCardM = (props) => {
  const { data } = props;

  return (
    <div className="movie-card">
      <Link to={`/streamm/movie/${data.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4>
              <p>{data.release_date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardM;
