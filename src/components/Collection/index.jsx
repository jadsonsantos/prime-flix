import { useEffect } from 'react'

import MovieCarousel from 'components/MovieCarousel'

import { API_IMAGE_URL } from 'constants'
import useCollection from 'hooks/useCollection'

import PropTypes from 'prop-types'

import './Collection.scss'

const Collection = ({ collection }) => {
  const { backdrop_path, name, id } = collection

  const { collections, fetchCollection } = useCollection()

  useEffect(() => {
    fetchCollection(id)
  }, [id])

  const style = {
    backgroundImage: `url(${API_IMAGE_URL}${backdrop_path})`,
  }

  // Get backdrop images from collection parts
  const backdropImages =
    collections?.parts
      ?.filter((movie) => movie.backdrop_path)
      .slice(0, 6)
      .map((movie) => ({
        url: `${API_IMAGE_URL}${movie.backdrop_path}`,
        title: movie.title,
      })) || []

  return (
    <>
      <section className="collection" style={style}>
        <div className="collection__infos">
          <h2 className="collection__title">{name}</h2>
          {collections?.overview && (
            <p className="collection__paragraph">{collections?.overview}</p>
          )}
        </div>
        {backdropImages.length > 0 && (
          <div className="collection__images" style={{ display: 'none' }}>
            {backdropImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.title}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </section>

      {collections?.parts && (
        <MovieCarousel
          title="Todos os filmes da franquia"
          movies={collections.parts}
        />
      )}
    </>
  )
}

Collection.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
  }),
}

export default Collection
