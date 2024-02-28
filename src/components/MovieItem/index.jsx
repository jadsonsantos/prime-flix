/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.scss'

const MovieItem = ({ movie }) => {
  return (
    <article key={movie.id} className="movies__item">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className="movie__image"
        />
      </Link>
      <Link to={`/movie/${movie.id}`} className="movie__link">
        Acessar
      </Link>
    </article>
  )
}

export default MovieItem
