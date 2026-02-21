import { useRef, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MdImageNotSupported } from 'react-icons/md'
import { Link } from 'react-router-dom'

import ImageWithLoader from 'components/ImageWithLoader'
import Title from 'components/Title'

import { API_IMAGE_URL } from 'constants/api'
import useCredits from 'hooks/useCredits'

import './Credits.scss'

const Credits = () => {
  const { credits } = useCredits()
  const carouselRef = useRef(null)
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
  }, [credits])

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  if (!credits?.cast || credits.cast.length === 0) return null

  return (
    <section className="credits-section">
      <div className="credits-section__header">
        <Title>Elenco</Title>
        <div className="credits-section__nav">
          <button
            className="credits-section__btn"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            className="credits-section__btn"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Próximo"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <ul className="credits" ref={carouselRef}>
        {credits.cast.slice(0, 12).map((actor) => {
          const imagePath = actor.profile_path
            ? `${API_IMAGE_URL}${actor.profile_path}`
            : null

          return (
            <li key={actor.id} className="credits__item">
              <Link to={`/person/${actor.id}`}>
                <div className="credits__image-wrapper">
                  {imagePath ? (
                    <ImageWithLoader
                      src={imagePath}
                      placeholderSrc="https://placehold.co/200x300"
                      className="credits__image"
                      alt={actor.name}
                      width={200}
                      height={300}
                    />
                  ) : (
                    <div className="credits__no-image">
                      <MdImageNotSupported size={40} />
                    </div>
                  )}
                </div>
                <div className="credits__info">
                  <p className="credits__name">{actor.name}</p>
                  {actor.character && (
                    <p className="credits__character">{actor.character}</p>
                  )}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Credits
