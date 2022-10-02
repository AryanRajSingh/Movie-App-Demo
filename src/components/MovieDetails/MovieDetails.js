import './MovieDetails.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAsyncMovieOrShowDetail } from '../../features/moviesSlice/moviesSlice';

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const selectedMovie = useSelector((state) => state.movies.selectMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(movieId));
    setLoading(false);
  }, [dispatch, movieId]);

  console.log(selectedMovie, movieId);
  if (loading) {
    return (
      <section className='movie-detail'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  // const { Title: title } = selectedMovie;

  return (
    <section className='movie-detail'>
      <div className='container'>
        <div className='movie-detail__card'>{}</div>
      </div>
    </section>
  );
};

export default MovieDetails;
