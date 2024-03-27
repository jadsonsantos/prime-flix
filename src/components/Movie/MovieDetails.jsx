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
  } = movie

  return (
    <article className="movie__details">
      <h3>Detalhes</h3>
      <p>
        <strong>Título original:</strong> {original_title}
      </p>
      {production_companies.length > 0 && (
        <p>
          <strong>Produtoras: </strong>
          {production_companies.map((item, index) => (
            <span key={item.id}>
              {item.name}
              {index < production_companies.length - 1 && ','}{' '}
            </span>
          ))}
        </p>
      )}
      {production_countries.length > 0 && (
        <p>
          <strong>Países de origem:</strong>{' '}
          {production_countries.map((item, index) => (
            <span key={item.name}>
              {item.name}
              {index < production_countries.length - 1 && ','}{' '}
            </span>
          ))}
        </p>
      )}
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
    </article>
  )
}

export default MovieDetails
