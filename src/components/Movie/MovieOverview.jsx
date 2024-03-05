/* eslint-disable react/prop-types */
import React from 'react'

import Title from 'components/Title'

const MovieOverview = ({ movie }) => {
  return (
    <article className="movie__overview">
      <Title>{movie.title}</Title>
      <h3>Sinopse</h3>
      <p>{movie.overview}</p>
      {movie.tagline && (
        <p>
          <strong>Slogan:</strong> {movie.tagline}
        </p>
      )}
    </article>
  )
}

export default MovieOverview
