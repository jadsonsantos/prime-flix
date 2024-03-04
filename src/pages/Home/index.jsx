import Loading from 'components/Loading'
import Movies from 'components/Movies'
import Title from 'components/Title'

import useHome from './useHome'

const Home = () => {
  const { loading, movies } = useHome()

  if (loading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <div className="home container">
      <Title>Em exibição</Title>
      <Movies movies={movies} />
    </div>
  )
}

export default Home
