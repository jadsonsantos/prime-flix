import { Link } from 'react-router-dom'

import useFavorites from 'pages/Favorites/useFavorites'

import ImageWithLoader from 'components/ImageWithLoader'

import { API_IMAGE_URL } from 'constants/api'
import Favorite from 'interfaces/favorite'

import './MovieItem.scss'

interface MovieProps {
  movie: Favorite
}

const MovieItem = ({ movie }: MovieProps) => {
  const { deleteFavorite } = useFavorites()

  const getMediaLink = () => {
    return movie.mediaType === 'tv'
      ? `/series/${movie.id}`
      : `/movie/${movie.id}`
  }

  const getDisplayDate = () => {
    const date =
      movie.mediaType === 'tv' ? movie.firstAirDate : movie.releaseDate
    return date ? new Date(date).getFullYear() : null
  }

  const mediaLink = getMediaLink()
  const displayDate = getDisplayDate()

  return (
    <article key={`${movie.mediaType}-${movie.id}`} className="movie-item">
      <button
        className="movie-item__action"
        onClick={() => deleteFavorite(movie.id, movie.mediaType)}
        title={`Excluir ${movie.mediaType === 'tv' ? 'série' : 'filme'}`}
      >
        Excluir
      </button>
      <Link to={mediaLink}>
        <ImageWithLoader
          src={`${API_IMAGE_URL}${movie.poster}`}
          placeholderSrc="https://placehold.co/385x580"
          alt={movie.title}
          title={movie.title}
          className="movie-item__image"
          width={385}
          height={580}
        />
        <div className="movie-item__info">
          <p className="movie-item__title">{movie.title}</p>
          <span className="movie-item__type">
            {movie.mediaType === 'tv' ? 'Série' : 'Filme'}
          </span>
          {displayDate && (
            <span className="movie-item__date">{displayDate}</span>
          )}
        </div>
      </Link>
    </article>
  )
}

export default MovieItem
