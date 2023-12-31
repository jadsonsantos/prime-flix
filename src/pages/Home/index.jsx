import { Link } from 'react-router-dom'
import './Home.scss'
import React from 'react'
import useHome from './useHome'

const Home = () => {
  const { loading, movies } = useHome()

  if (loading) {
    return <section className="loading">Carregando filmes...</section>
  }

  return (
    <div>
      <div className="movies">
        {movies.map(({ title, id, poster_path }) => (
          <article key={id} className="movies__item movie">
            <strong className="movie__title">{title}</strong>
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
