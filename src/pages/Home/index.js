import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './Home.scss'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: '9c366f3c92674ee5238386c2ef0ce2f1',
          language: 'pt-BR',
          page: 1,
        },
      })

      setMovies(response.data.results.slice(0, 10))
      setLoading(false)
    }

    loadMovies()
  }, [])

  if (loading) {
    return <section className="loading">Carregando filmes...</section>
  }

  return (
    <div>
      <div className="movies">
        {movies.map(({ title, id, poster_path }) => (
          <article key={id} className="movies__item movie">
            <strong className="movie__title">{title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
              className="movie__image"
            />
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
