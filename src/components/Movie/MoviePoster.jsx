/* eslint-disable react/prop-types */
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

import ImageWithLoader from 'components/ImageWithLoader'

import useMovie from 'hooks/useMovie'

import { API_IMAGE_URL } from 'constants'

const MoviePoster = ({ movie }) => {
  const { poster_path, title } = movie
  const { saveMovie } = useMovie()

  const urlImage = poster_path
    ? `${API_IMAGE_URL}${poster_path}`
    : 'https://placehold.co/400x600'

  const size = 20

  return (
    <article className="movie__poster">
      <div
        className="movie__save"
        onClick={saveMovie}
        title="Adicionar aos favoritos"
      >
        <FaRegHeart size={size} />
      </div>
      <ImageWithLoader
        src={urlImage}
        placeholderSrc="https://placehold.co/400x600"
        width={400}
        height={600}
        alt={title}
        className="movie__image"
        loading="eager"
      />
    </article>
  )
}

export default MoviePoster
