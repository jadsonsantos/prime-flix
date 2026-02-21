import { useState, useEffect, useCallback } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Button from 'components/Button'

import Movie from 'interfaces/movie'
import convertMinutesToHours from 'utils/convertMinutesToHours'

import './HeroBanner.scss'

interface HeroBannerProps {
  movies: Movie[]
}

const HeroBanner = ({ movies }: HeroBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredMovies = movies.slice(0, 5)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredMovies.length)
  }, [featuredMovies.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length
    )
  }, [featuredMovies.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [nextSlide])

  if (featuredMovies.length === 0) return null

  const currentMovie = featuredMovies[currentIndex]
  const {
    id,
    title,
    backdrop_path,
    vote_average,
    release_date,
    runtime,
    overview,
    genres,
  } = currentMovie

  const year = release_date ? new Date(release_date).getFullYear() : ''
  const runTime = convertMinutesToHours(runtime || 0)
  const hoursText = runTime.hours > 0 ? `${runTime.hours}h ` : ''
  const minutesText = runTime.minutes > 0 ? `${runTime.minutes}min` : ''
  const runtimeText =
    runTime.hours > 0 || runTime.minutes > 0 ? `${hoursText}${minutesText}` : ''

  const backdropUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : null

  const bannerStyle = backdropUrl
    ? { backgroundImage: `url(${backdropUrl})` }
    : {}

  const bannerClass = backdropUrl
    ? 'hero-banner'
    : 'hero-banner hero-banner--no-image'

  return (
    <section className={bannerClass} style={bannerStyle}>
      <div className="hero-banner__overlay" />

      <div className="hero-banner__content container">
        <div className="hero-banner__info">
          {genres && genres.length > 0 && (
            <div className="hero-banner__genres">
              {genres.slice(0, 3).map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < Math.min(genres.length, 3) - 1 && (
                    <span className="hero-banner__genre-separator"> • </span>
                  )}
                </span>
              ))}
            </div>
          )}

          <h1 className="hero-banner__title">{title}</h1>

          <div className="hero-banner__meta">
            <span className="hero-banner__rating">
              <FaStar className="hero-banner__star" />
              {vote_average?.toFixed(1)}
            </span>
            {year && <span>{year}</span>}
            {runtimeText && <span>{runtimeText}</span>}
          </div>

          {overview && (
            <p className="hero-banner__overview">
              {overview.length > 200
                ? `${overview.substring(0, 200)}...`
                : overview}
            </p>
          )}

          <div className="hero-banner__actions">
            <Link to={`/movie/${id}`}>
              <Button variation="primary">Mais informações</Button>
            </Link>
          </div>
        </div>
      </div>

      <button
        className="hero-banner__nav hero-banner__nav--prev"
        onClick={prevSlide}
        aria-label="Filme anterior"
      >
        <FaChevronLeft />
      </button>

      <button
        className="hero-banner__nav hero-banner__nav--next"
        onClick={nextSlide}
        aria-label="Próximo filme"
      >
        <FaChevronRight />
      </button>

      <div className="hero-banner__dots">
        {featuredMovies.map((_, index) => {
          const dotClass =
            index === currentIndex ? 'hero-banner__dot--active' : ''
          return (
            <button
              key={index}
              className={`hero-banner__dot ${dotClass}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para filme ${index + 1}`}
            />
          )
        })}
      </div>
    </section>
  )
}

export default HeroBanner
