/* eslint-disable react/prop-types */
import { FaRegHeart } from 'react-icons/fa'
import { MdImageNotSupported } from 'react-icons/md'

import ImageWithLoader from 'components/ImageWithLoader'

import { API_IMAGE_URL } from 'constants'
import useMovie from 'hooks/useMovie'

const MoviePoster = ({ movie }) => {
  const { poster_path, title } = movie
  const { saveMovie } = useMovie()

  const urlImage = poster_path ? `${API_IMAGE_URL}${poster_path}` : null

  return (
    <article className="movie__poster">
      <button
        className="movie__save"
        onClick={saveMovie}
        title="Adicionar aos favoritos"
        aria-label="Adicionar aos favoritos"
      >
        <FaRegHeart size={22} />
      </button>
      {urlImage ? (
        <ImageWithLoader
          src={urlImage}
          placeholderSrc="https://placehold.co/400x600"
          width={400}
          height={600}
          alt={title}
          className="movie__image"
          loading="eager"
        />
      ) : (
        <div className="movie__no-image">
          <MdImageNotSupported size={60} />
        </div>
      )}
    </article>
  )
}

export default MoviePoster
