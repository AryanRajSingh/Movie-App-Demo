import './MovieList.scss';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieList = () => {
  const { Search: search } = useSelector((store) => store.movies.movies);

  if (!search) {
    return (
      <section className='movie-list'>
        <p>No Movies Found</p>
      </section>
    );
  }

  return (
    <section className='movie-list'>
      {search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </section>
  );
};

export default MovieList;
