/* eslint-disable react/prop-types */
import React from 'react'

import { API_IMAGE_URL } from 'constants'

const MoviePoster = ({ movie }) => {
  const { poster_path, title } = movie

  return (
    <article className="movie__poster">
      <img
        src={`${API_IMAGE_URL}${poster_path}`}
        alt={title}
        className="movie__image"
      />
    </article>
  )
}

export default MoviePoster
