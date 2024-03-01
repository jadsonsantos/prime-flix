/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './MovieItem.scss'

const MovieItem = ({ movie }) => {
  return (
    <article key={movie.id} className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
          className="movie-item__image"
        />
        <p className="movie-item__title">{movie.title}</p>
      </Link>
    </article>
  )
}

export default MovieItem
