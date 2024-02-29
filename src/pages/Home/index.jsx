import MovieItem from 'components/MovieItem'
import './Home.scss'
import useHome from './useHome'
import Loading from 'components/Loading'

const Home = () => {
  const { loading, movies } = useHome()

  if (loading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <div className="home container">
      <div className="movies">
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
