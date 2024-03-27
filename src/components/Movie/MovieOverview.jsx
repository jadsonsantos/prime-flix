/* eslint-disable react/prop-types */
import React from 'react'

import Title from 'components/Title'

import MovieFacts from './MovieFacts'

const MovieOverview = ({ movie }) => {
  return (
    <article className="movie__overview">
      <Title>{movie.title}</Title>
      <MovieFacts movie={movie} />
      {movie.tagline && <p className="movie__tagline">{movie.tagline}</p>}

      {movie.overview && (
        <>
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
        </>
      )}
    </article>
  )
}

export default MovieOverview
