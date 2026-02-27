import { useEffect, useState } from 'react'

import HeroBanner from 'components/HeroBanner'
import Loading from 'components/Loading'
import MovieCarousel from 'components/MovieCarousel'

import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } from 'constants/filters'
import Movie from 'interfaces/movie'
import getMovies from 'services/getMovies'

import './Home.scss'

interface MoviesData {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

const Home = () => {
  const [moviesData, setMoviesData] = useState<MoviesData>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setIsLoading(true)
        const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
          getMovies(NOW_PLAYING),
          getMovies(POPULAR),
          getMovies(TOP_RATED),
          getMovies(UPCOMING),
        ])

        setMoviesData({
          nowPlaying,
          popular,
          topRated,
          upcoming,
        })
      } catch (error) {
        console.error('Erro ao buscar filmes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAllMovies()
  }, [])

  if (isLoading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <div className="home">
      <HeroBanner movies={moviesData.nowPlaying} />

      <div className="container">
        <MovieCarousel
          title="Em exibição"
          movies={moviesData.nowPlaying}
          badge="new"
        />

        <MovieCarousel
          title="Populares"
          movies={moviesData.popular}
          badge="top10"
        />

        <MovieCarousel title="Mais Votados" movies={moviesData.topRated} />

        <MovieCarousel
          title="Em breve"
          movies={moviesData.upcoming}
          badge="upcoming"
        />
      </div>
    </div>
  )
}

export default Home
