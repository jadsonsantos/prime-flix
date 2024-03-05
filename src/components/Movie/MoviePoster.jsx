/* eslint-disable react/prop-types */
import React from 'react'

import CustomLink from 'components/CustomLink'

const MoviePoster = ({ movie }) => {
  const { poster_path, homepage, title } = movie

  return (
    <article className="movie__poster">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className="movie__image"
      />
      {homepage.length > 0 && (
        <CustomLink href={homepage} className="movie__link">
          Acessar site do filme
        </CustomLink>
      )}
    </article>
  )
}

export default MoviePoster
