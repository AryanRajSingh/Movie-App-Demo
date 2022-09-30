import './MovieCard.scss';

const MovieCard = ({
  Title: title,
  Year: year,
  imdbID: id,
  Poster: poster,
}) => {
  return <div className='movie-card'>{title}</div>;
};

export default MovieCard;
