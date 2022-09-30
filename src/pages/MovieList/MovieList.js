import './MovieList.scss';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieList = () => {
  const { Search: movies } = useSelector((store) => store.movies.movies);

  if (!movies) {
    return (
      <section className='movie-list'>
        <p>No Movies Found</p>
      </section>
    );
  }

  return (
    <section className='movie-list'>
      <h2>Movies</h2>
      <div className='box'>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
