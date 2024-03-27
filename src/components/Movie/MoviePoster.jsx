/* eslint-disable react/prop-types */
import React from 'react'

import ImageWithLoader from 'components/ImageWithLoader'

import { API_IMAGE_URL } from 'constants'

const MoviePoster = ({ movie }) => {
  const { poster_path, title } = movie

  const urlImage = poster_path
    ? `${API_IMAGE_URL}${poster_path}`
    : 'https://placehold.co/400x600'

  return (
    <article className="movie__poster">
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
