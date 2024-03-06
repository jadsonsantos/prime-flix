/* eslint-disable react/prop-types */
import React from 'react'

const MoviePoster = ({ movie }) => {
  const { poster_path, title } = movie

  return (
    <article className="movie__poster">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className="movie__image"
      />
    </article>
  )
}

export default MoviePoster
