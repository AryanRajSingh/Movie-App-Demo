import './MovieList.scss';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieList = () => {
  const { Search: movies } = useSelector((state) => state.movies.movies);
  const { Search: shows } = useSelector((state) => state.movies.shows);

  console.log(shows);

  if (!movies) {
    return (
      <section className='movie-list movie-loading'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className='movie-list'>
        <h2>Movies</h2>
        <div className='box'>
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      </section>
      <section className='movie-list'>
        <h2>Shows</h2>
        <div className='box'>
          {shows?.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MovieList;
