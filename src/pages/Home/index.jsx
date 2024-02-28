import { Link } from 'react-router-dom'
import './Home.scss'
import useHome from './useHome'
import Loading from 'components/Loading'

const Home = () => {
  const { loading, movies } = useHome()

  if (loading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <div className="container">
      <div className="movies">
        {movies.map(({ title, id, poster_path }) => (
          <article key={id} className="movies__item">
            <Link to={`/movie/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title}
                className="movie__image"
              />
            </Link>
            <Link to={`/movie/${id}`} className="movie__link">
              Acessar
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Home
