import { useRef, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import MovieCard from 'components/MovieCard'
import Title from 'components/Title'

import Movie from 'interfaces/movie'
import MovieCredits from 'interfaces/movieCredits'

import './MovieCarousel.scss'

export type BadgeType = 'new' | 'trending' | 'top10' | 'upcoming' | null

interface MovieCarouselProps {
  title: string
  movies: Movie[] | MovieCredits[]
  badge?: BadgeType
  showCharacter?: boolean
}

const MovieCarousel = ({
  title,
  movies,
  badge = null,
  showCharacter = false,
}: MovieCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons)
      return () => carousel.removeEventListener('scroll', checkScrollButtons)
    }
  }, [movies])

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  if (!movies || movies.length === 0) return null

  return (
    <section className="movie-carousel">
      <div className="movie-carousel__header">
        <Title>{title}</Title>
        <div className="movie-carousel__nav">
          <button
            className="movie-carousel__btn"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            className="movie-carousel__btn"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Próximo"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="movie-carousel__track" ref={carouselRef}>
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            badge={badge}
            index={index}
            showCharacter={showCharacter}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieCarousel
