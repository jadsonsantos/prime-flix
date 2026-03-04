import { FaStar } from 'react-icons/fa'
import { MdImageNotSupported } from 'react-icons/md'
import { Link } from 'react-router-dom'

import ImageWithLoader from 'components/ImageWithLoader'
import { BadgeType } from 'components/MovieCarousel'

import { API_IMAGE_URL } from 'constants/api'
import Movie from 'interfaces/movie'
import MovieCredits from 'interfaces/movieCredits'
import Tv from 'interfaces/tv'

import './MovieCard.scss'

interface MovieCardProps {
  movie: Movie | MovieCredits | Tv
  badge?: BadgeType
  index?: number
  showCharacter?: boolean
  isTvShow?: boolean
}

const getBadgeLabel = (badge: BadgeType, index: number): string | null => {
  if (badge === 'new') return 'Novo'
  if (badge === 'trending') return 'Em alta'
  if (badge === 'top10') return index < 10 ? `Top ${index + 1}` : null
  if (badge === 'upcoming') return 'Em breve'
  return null
}

const MovieCard = ({
  movie,
  badge = null,
  index = 0,
  showCharacter = false,
  isTvShow = false,
}: MovieCardProps) => {
  const { id } = movie
  const title = isTvShow
    ? (movie as Tv).name
    : (movie as Movie | MovieCredits).title
  const poster_path = movie.poster_path
  const vote_average = movie.vote_average
  const release_date = isTvShow
    ? (movie as Tv).first_air_date
    : (movie as Movie | MovieCredits).release_date
  const character = 'character' in movie ? movie.character : null

  const year = release_date ? new Date(release_date).getFullYear() : null
  const badgeLabel = getBadgeLabel(badge, index)

  const posterUrl = poster_path ? `${API_IMAGE_URL}${poster_path}` : null
  const link = isTvShow ? `/series/${id}` : `/movie/${id}`
  return (
    <article className="movie-card">
      <Link to={link} className="movie-card__link">
        <div className="movie-card__poster">
          {badgeLabel && (
            <span className={`movie-card__badge movie-card__badge--${badge}`}>
              {badgeLabel}
            </span>
          )}
          {year && <span className="movie-card__year">{year}</span>}
          {posterUrl ? (
            <ImageWithLoader
              src={posterUrl}
              placeholderSrc="https://placehold.co/200x300"
              alt={title}
              title={title}
              className="movie-card__image"
              width={200}
              height={300}
            />
          ) : (
            <div className="movie-card__no-image">
              <MdImageNotSupported size={40} />
            </div>
          )}
        </div>
        <div className="movie-card__info">
          <h3 className="movie-card__title">{title}</h3>
          <div className="movie-card__meta">
            {vote_average > 0 && (
              <span className="movie-card__rating">
                <FaStar className="movie-card__star" />
                {vote_average.toFixed(1)}
              </span>
            )}
            {year && <span className="movie-card__release">{year}</span>}
          </div>
          {showCharacter && character && (
            <p className="movie-card__character">
              como <span>{character}</span>
            </p>
          )}
        </div>
      </Link>
    </article>
  )
}

export default MovieCard
