/* eslint-disable react/prop-types */
import React from 'react'

import convertMinutesToHours from 'utils/convertMinutesToHours'
import formatCurrency from 'utils/formatCurrency'
import formateDate from 'utils/formateDate'

const MovieDetails = ({ movie }) => {
  const {
    runtime,
    original_title,
    release_date,
    production_companies,
    production_countries,
    budget,
    revenue,
    vote_average,
    genres,
  } = movie
  const runTime = convertMinutesToHours(runtime)

  return (
    <article className="movie__details">
      <h3>Detalhes</h3>
      <p>
        <strong>Título original:</strong> {original_title}
      </p>
      <p>
        <strong>Data de lançamento:</strong> {formateDate(release_date)}
      </p>
      <p>
        <strong>Duração:</strong> {runTime.hours > 0 && `${runTime.hours}h `}
        {runTime.minutes > 0 && `${runTime.minutes}m`}
      </p>{' '}
      <p>
        <strong>Produtoras: </strong>
        {production_companies.map((item, index) => (
          <span key={item.id}>
            {item.name}
            {index < production_companies.length - 1 && ','}{' '}
          </span>
        ))}
      </p>
      <p>
        <strong>Países de origem:</strong>{' '}
        {production_countries.map((item, index) => (
          <span key={item.name}>
            {item.name}
            {index < production_countries.length - 1 && ','}{' '}
          </span>
        ))}
      </p>
      {budget > 0 && (
        <p>
          <strong>Orçamento:</strong> {formatCurrency(budget)}
        </p>
      )}
      {revenue > 0 && (
        <p>
          <strong>Receita:</strong> {formatCurrency(revenue)}
        </p>
      )}
      <p className="movie__average">
        <strong>Avaliação:</strong> {vote_average.toFixed(1)} / 10
      </p>
      <p>
        <strong>Gêneros:</strong>
        {genres.map((genre) => (
          <span key={genre.id} className="movie__genre">
            {genre.name}
          </span>
        ))}
      </p>
    </article>
  )
}

export default MovieDetails
