import { Link } from 'react-router-dom'

import useFavorites from 'pages/Favorites/useFavorites'

import ImageWithLoader from 'components/ImageWithLoader'

import { API_IMAGE_URL } from 'constants/api'
import Movie from 'interfaces/movie'
import MovieCredits from 'interfaces/movieCredits'

import './MovieItem.scss'

interface MovieProps {
  movie: Movie | MovieCredits
}

const MovieItem = ({ movie }: MovieProps) => {
  const { deleteMovie } = useFavorites()

  return (
    <article key={movie.id} className="movie-item">
      <button
        className="movie-item__action"
        onClick={() => deleteMovie(movie.id)}
        title="Excluir filme"
      >
        Excluir
      </button>
      <Link to={`/movie/${movie.id}`}>
        <ImageWithLoader
          src={`${API_IMAGE_URL}${movie.poster_path}`}
          placeholderSrc="https://placehold.co/385x580"
          alt={movie.title}
          title={movie.title}
          className="movie-item__image"
          width={385}
          height={580}
        />
        <p className="movie-item__title">{movie.title}</p>
      </Link>
    </article>
  )
}

export default MovieItem
