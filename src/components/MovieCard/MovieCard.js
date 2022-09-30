import './MovieCard.scss';

const MovieCard = ({
  Title: title,
  Year: year,
  imdbID: id,
  Poster: poster,
}) => {
  const ghostImage = 'https://via.placeholder.com/300x450';

  return (
    <div className='movie-card'>
      <figure>
        <img src={poster === 'N/A' ? ghostImage : poster} alt={title} />
      </figure>
      <div>
        <h4>{title}</h4>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
