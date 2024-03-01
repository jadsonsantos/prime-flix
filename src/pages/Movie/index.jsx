import { formateDate } from 'utils'
import './Movie.scss'
import useMovie from './useMovie'
import formatCurrency from 'utils/formatCurrency'
import Loading from 'components/Loading'

const Movie = () => {
  const { saveMovie, loading, movie } = useMovie()

  if (loading) {
    return <Loading text="Carregando detalhes..." />
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
    <section className="movie-page">
      <div className="movie">
        <h1 className="movie__title">{title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          className="movie__image"
          width={800}
          height={450}
        />
        <h3>Sinopse</h3>
        <p>{overview}</p>
        {tagline && <p>Slogan: {tagline}</p>}
        <h3>Detalhes</h3>
        <p>
          <strong>Título original:</strong> {original_title}
        </p>
        <p>
          <strong>Data de lançamento:</strong> {formateDate(release_date)}
        </p>
        <p>
          <strong>Duração:</strong> {runtime} minutos
        </p>{' '}
        <p>
          <strong>Países de origem:</strong>{' '}
          {production_countries.map((item, index) => {
            return (
              <span key={item.name}>
                {item.name}
                {index < production_countries.length - 1 && ','}{' '}
              </span>
            )
          })}
        </p>
        {budget > 0 && (
          <p>
            <strong>Budget:</strong> {formatCurrency(budget)}
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
        <div className="movie__buttons">
          <button className="movie__button" onClick={saveMovie}>
            Salvar
          </button>
          <a
            className="movie__button movie__button--link"
            href={`https://www.youtube.com/results?search_query=${title} trailer`}
            target="_blank"
            rel="external noreferrer"
          >
            Trailer
          </a>
        </div>
      </div>
    </section>
  )
}

export default Movie
