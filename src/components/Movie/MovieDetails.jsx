/* eslint-disable react/prop-types */

import formatCurrency from 'utils/formatCurrency'

const MovieDetails = ({ movie, isTvShow = false }) => {
  const {
    original_title,
    production_companies,
    production_countries,
    budget,
    revenue,
  } = movie

  // Exibir informações específicas de séries
  const renderTvShowInfo = () => {
    if (!isTvShow) return null

    return (
      <>
        <div className="movie__detail-item">
          <p className="movie__detail-label">Temporadas:</p>
          <p className="movie__detail-value">{movie.number_of_seasons}</p>
        </div>
        <div className="movie__detail-item">
          <p className="movie__detail-label">Episódios:</p>
          <p className="movie__detail-value">{movie.number_of_episodes}</p>
        </div>
      </>
    )
  }

  return (
    <article className="movie__details">
      <h3 className="movie__section-title">Detalhes</h3>
      <div className="movie__details-list">
        <div className="movie__detail-item">
          <span className="movie__detail-label">Título original:</span>
          <span className="movie__detail-value">{original_title}</span>
        </div>
        {production_companies && production_companies.length > 0 && (
          <div className="movie__detail-item">
            <span className="movie__detail-label">Produtoras:</span>
            <span className="movie__detail-value">
              {production_companies.map((item) => item.name).join(', ')}
            </span>
          </div>
        )}
        {production_countries && production_countries.length > 0 && (
          <div className="movie__detail-item">
            <span className="movie__detail-label">País de origem:</span>
            <span className="movie__detail-value">
              {production_countries.map((item) => item.name).join(', ')}
            </span>
          </div>
        )}
        {budget > 0 && (
          <div className="movie__detail-item">
            <span className="movie__detail-label">Orçamento:</span>
            <span className="movie__detail-value">
              {formatCurrency(budget)}
            </span>
          </div>
        )}
        {revenue > 0 && (
          <div className="movie__detail-item">
            <span className="movie__detail-label">Receita:</span>
            <span className="movie__detail-value movie__detail-value--highlight">
              {formatCurrency(revenue)}
            </span>
          </div>
        )}
        {renderTvShowInfo()}
      </div>
    </article>
  )
}

export default MovieDetails
