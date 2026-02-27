/* eslint-disable react/prop-types */
import React from 'react'
import { FaStar, FaCalendarAlt, FaClock } from 'react-icons/fa'

import convertMinutesToHours from 'utils/convertMinutesToHours'
import formateDate from 'utils/formateDate'

const MovieOverview = ({ movie }) => {
  const {
    title,
    tagline,
    overview,
    genres,
    release_date,
    runtime,
    vote_average,
  } = movie
  const runTime = convertMinutesToHours(runtime || 0)

  return (
    <article className="movie__overview">
      <div className="movie__header">
        <h1 className="movie__title">{title}</h1>

        <div className="movie__meta">
          {release_date && (
            <span className="movie__meta-item">
              <FaCalendarAlt />
              {formateDate(release_date)}
            </span>
          )}
          {runtime > 0 && (
            <span className="movie__meta-item">
              <FaClock />
              {runTime.hours > 0 && `${runTime.hours}h `}
              {runTime.minutes > 0 && `${runTime.minutes}min`}
            </span>
          )}
          {vote_average > 0 && (
            <span className="movie__rating">
              <FaStar className="movie__rating-star" />
              <span className="movie__rating-value">
                {vote_average.toFixed(1)}
              </span>
              <span className="movie__rating-max">/ 10</span>
            </span>
          )}
        </div>
      </div>

      {genres && genres.length > 0 && (
        <div className="movie__genres">
          {genres.map((genre) => (
            <span key={genre.id} className="movie__genre-tag">
              {genre.name}
            </span>
          ))}
        </div>
      )}

      {tagline && <p className="movie__tagline">{tagline}</p>}

      {overview && (
        <div className="movie__synopsis">
          <h3 className="movie__section-title">Sinopse</h3>
          <p className="movie__synopsis-text">{overview}</p>
        </div>
      )}
    </article>
  )
}

export default MovieOverview
