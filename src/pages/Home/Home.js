import { useEffect } from 'react';
import movieApi from '../../commmon/apis/MovieApi';
import { APIKey } from '../../commmon/apis/MovieApiKey';
import MovieList from '../MovieList/MovieList';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      try {
        const response = movieApi.get(
          `?apikey=${APIKey}&s=${movieText}&type=movie`
        );
        const data = await response;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
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
