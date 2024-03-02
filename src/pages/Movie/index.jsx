import { formateDate } from 'utils'
import formatCurrency from 'utils/formatCurrency'
import CustomLink from 'components/CustomLink'
import Loading from 'components/Loading'
import Title from 'components/Title'
import useMovie from './useMovie'
import './Movie.scss'

const Movie = () => {
  const { saveMovie, loading, movie } = useMovie()

  if (loading) {
    return <Loading text="Carregando detalhes..." />
  }

  const {
    title,
    // backdrop_path,
    poster_path,
    overview,
    vote_average,
    release_date,
    original_title,
    genres,
    tagline,
    runtime,
    budget,
    revenue,
    homepage,
    production_countries,
    production_companies,
  } = movie

  return (
    <section className="movie-page container">
      <div className="movie">
        <article className="movie__poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            className="movie__image"
          />
          {homepage.length > 0 && (
            <CustomLink href={homepage} className="movie__link">
              Acessar site do filme
            </CustomLink>
          )}
        </article>
        <article className="movie__details">
          <Title>{title}</Title>
          <h3>Sinopse</h3>
          <p>{overview}</p>
          {tagline && (
            <p>
              <strong>Slogan:</strong> {tagline}
            </p>
          )}
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
          <p>
            <strong>Receita:</strong> {formatCurrency(revenue)}
          </p>
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
            <CustomLink
              className="movie__button movie__button--link"
              href={`https://www.youtube.com/results?search_query=${title} trailer`}
            >
              Trailer
            </CustomLink>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Movie
