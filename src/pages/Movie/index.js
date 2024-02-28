import { formateDate } from 'utils'
import './Movie.scss'
import useMovie from './useMovie'
import React from 'react'

const Movie = () => {
  const { saveMovie, loading, movie } = useMovie()

  if (loading) {
    return <section className="loading">Carregando detalhes...</section>
  }

  const {
    title,
    backdrop_path,
    overview,
    vote_average,
    release_date,
    original_title,
    genres,
  } = movie

  return (
    <div className="movie">
      <h1 className="movie__title">{title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
        className="movie__image"
      />
      <span>{original_title}</span> | <span>{formateDate(release_date)}</span> |
      {genres.map((genre) => (
        <span key={genre.id}> {genre.name}, </span>
      ))}
      <h3>Sinopse</h3>
      <span>{overview}</span>
      <strong className="movie__average">
        Avaliação: {vote_average.toFixed(1)} / 10
      </strong>
      <div className="movie__buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            href={`https://www.youtube.com/results?search_query=${title} trailer`}
            target="_blank"
            rel="external noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Movie
