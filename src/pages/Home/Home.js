import './Home.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/moviesSlice/moviesSlice';

import MovieList from '../MovieList/MovieList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

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
