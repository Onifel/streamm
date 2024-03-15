import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import './details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFilm, faHome, faStar } from '@fortawesome/free-solid-svg-icons'

const DetailsM = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d49022b6e815498ef21ab7e6a697cd9b`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie/show details:', error);
        setIsLoading(false);
      }
    };

    fetchData();

  }, [id]);

  return (
    <div>
      <div className="back-container">
        <Link to="/streamm/" className="back-btn">
          <IoMdArrowRoundBack />
        </Link>
      </div>
      <div className="movie-section">
      {isLoading ? (
          <div>...Loading</div>
        ) : (
          <>
            <div className="section-left">
              <div className="movie-title">{data.original_name}</div>
              <div className="movie-rating">
              <div>
                  <span className='ttl'>Rating : <FontAwesomeIcon icon={faStar}/></span>
                  <span>{data.vote_average}</span>
                </div>
                <div>
                  <span className='ttl'>Vote : <FontAwesomeIcon icon={faFilm}/></span>
                  <span>{data.vote_count}</span>
                </div>
                <div>
                  <span className='ttl'>First air date : <FontAwesomeIcon icon={faCalendar}/></span>
                  <span id='rd'>{data.first_air_date}</span>
                </div>
              </div>
              <div className="movie-info">
                <div>
                  <span id='ovv'>Overview</span>
                  <span>{data.overview}</span>
                </div>
                <div>
                  <span id='lgg'>Languages</span>
                  <span>{data.original_language}</span>
                </div>
                <div>
                  <span id='plt'>Popularity</span>
                  <span>{data.popularity}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              {data.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.original_name} />
              ) : (
                <div>No image available</div>
              )}
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default DetailsM;
