import Loading from 'components/Loading'
import Movies from 'components/Movies'

import useHome from './useHome'

const Home = () => {
  const { loading, movies } = useHome()

  if (loading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <div className="home container">
      <Movies movies={movies} />
    </div>
  )
}

export default Home
