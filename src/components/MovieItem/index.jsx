/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Movie.scss'

const MovieItem = ({ movie }) => {
  return (
    <article key={movie.id} className="movie">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
          className="movie__image"
          width={300}
          height={450}
        />
        <p className="movie__title">{movie.title}</p>
      </Link>
    </article>
  )
}

export default MovieItem
