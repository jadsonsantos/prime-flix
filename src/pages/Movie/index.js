import { formateDate } from 'utils'
import './Movie.scss'
import useMovie from './useMovie'
import formatCurrency from 'utils/formatCurrency'

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
    tagline,
    runtime,
    budget,
    production_countries,
  } = movie

  return (
    <div className="movie">
      <h1 className="movie__title">{title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
        className="movie__image"
        width={800}
        height={450}
      />
      <span>Título original: {original_title}</span> |{' '}
      <span>{formateDate(release_date)}</span> | <span>{runtime} minutos</span>{' '}
      <h3>Sinopse</h3>
      <p>{overview}</p>
      {tagline && <p>Slogan: {tagline}</p>}
      <h3>Detalhes</h3>
      <p>
        Gêneros:
        {genres.map((genre) => (
          <span key={genre.id} className="movie__genre">
            {genre.name}
          </span>
        ))}
      </p>
      {budget > 0 && <p>Budget: {formatCurrency(budget)}</p>}
      <p>
        Países de origem:{' '}
        {production_countries.map((item) => (
          <span key={item.name}>{item.name} | </span>
        ))}
      </p>
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
