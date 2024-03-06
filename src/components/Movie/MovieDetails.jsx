/* eslint-disable react/prop-types */
import React from 'react'

import formatCurrency from 'utils/formatCurrency'

const MovieDetails = ({ movie }) => {
  const {
    original_title,
    production_companies,
    production_countries,
    budget,
    revenue,
    vote_average,
  } = movie

  return (
    <article className="movie__details">
      <h3>Detalhes</h3>
      <p>
        <strong>Título original:</strong> {original_title}
      </p>
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
    </article>
  )
}

export default MovieDetails
