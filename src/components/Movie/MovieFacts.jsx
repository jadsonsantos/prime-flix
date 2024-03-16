import React from 'react'

import convertMinutesToHours from 'utils/convertMinutesToHours'
import formateDate from 'utils/formateDate'

import PropTypes from 'prop-types'

const MovieFacts = ({ movie }) => {
  const { runtime, genres, release_date, vote_average } = movie
  const runTime = convertMinutesToHours(runtime)

  return (
    <div className="movie__facts">
      <span>{formateDate(release_date)}</span>
      <span>
        {runTime.hours > 0 && `${runTime.hours}h `}
        {runTime.minutes > 0 && `${runTime.minutes}m`}
      </span>
      <span>
        {genres.map((genre) => (
          <span key={genre.id} className="movie__genre">
            {genre.name}
          </span>
        ))}
      </span>
      {vote_average > 0 && <span>{vote_average.toFixed(1)} / 10</span>}
    </div>
  )
}

MovieFacts.propTypes = {
  movie: PropTypes.shape({
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
  }),
}

export default MovieFacts
