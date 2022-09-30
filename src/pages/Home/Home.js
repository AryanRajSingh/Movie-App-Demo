import './Home.scss';
import { useEffect } from 'react';
import movieApi from '../../commmon/apis/MovieApi';
import { APIKey } from '../../commmon/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/moviesSlice/moviesSlice';

import MovieList from '../MovieList/MovieList';

const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      );
      const data = await response.data;
      dispatch(addMovies(data));
    };
    fetchMovies();
  }, []);

  return (
    <section className='home'>
      <div className='container'>
        <div className='banner-image'></div>
        <MovieList />
      </div>
    </section>
  );
};

export default Home;
