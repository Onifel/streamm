import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './movieList.css';
import axios from 'axios';
import MovieCardM from '../movieCard/MovieCardM';
import MovieCardS from '../movieCard/movieCardS';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Settings from '../../settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import {useNavigate} from 'react-router-dom';


const MovieList = () => {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const history = useNavigate();

    const getMovies = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
                params: {
                    api_key: 'd49022b6e815498ef21ab7e6a697cd9b',
                }
            });
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    const getShows = async () => {
      try {
          const response = await axios.get("https://api.themoviedb.org/3/discover/tv", {
              params: {
                  api_key: 'd49022b6e815498ef21ab7e6a697cd9b',
              }
          });
          setShows(response.data.results);
      } catch (error) {
          console.error('Error fetching movies:', error);
      }
  };

  useEffect(() => {
    getShows();
}, []);

useEffect(() => {
  const handleSearch = (e) => {
      e.preventDefault();
      let searchQuery = $("#query").val();
      let apiKey = 'd49022b6e815498ef21ab7e6a697cd9b';
      let apiUrlM = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;
      let apiUrlS = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchQuery}`;

      fetch(apiUrlM)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (data.results && data.results.length > 0) {
            let movieId = data.results[0].id;
            let movieUrl = `/streamm/movie/${movieId}`;
            history(movieUrl);
          } else {
              setMovies([]);
          }
      })
      .catch(error => {
          console.error('Error fetching movies:', error);
      });

      fetch(apiUrlS)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (data.results && data.results.length > 0) {
            let showId = data.results[0].id;
            let showUrl = `/streamm/show/${showId}`;
            history(showUrl);
              setShows([]);
          }
      })
      .catch(error => {
          console.error('Error fetching shows:', error);
      });
  };

  $("#searchForm").on("submit", handleSearch);
  $("#searchBtn").on("click",handleSearch);

  return () => {
    $("#searchBtn").off('click', handleSearch);
    $("#searchForm").off('submit', handleSearch);
  };
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  handleSearch(e);
};
  

  return (
    <div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            id="query"
            type="text"
            value={term}
            placeholder="search movie/show"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button id="searchBtn" type="submit">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </form>
      </div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...Settings}>
              {movies.map((movie) => (
                <div className="slide" key={movie.id}>
                  <MovieCardM data={movie} />
                </div>
              ))}
            </Slider>
          </div>  
        </div>
        <div className="shows-list">
          <h2>Shows</h2>
          <div className="movie-container">
            <Slider {...Settings}>
              {shows.map((show) => (
                <div className="slide" key={show.id}>
                  <MovieCardS data={show} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
