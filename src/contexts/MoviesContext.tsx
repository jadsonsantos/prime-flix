import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

import Movie from 'interfaces/movie'
import getMovies from 'services/getMovies'

interface Movies {
  [key: string]: Movie[]
}

interface MoviesContextType {
  moviesData: Movies
  isLoading: boolean
  fetchMovies: (filter: string) => Promise<void>
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined)

const initialMoviesData = {
  now_playing: [],
  popular: [],
  top_rated: [],
  upcoming: [],
}

export const useMoviesContext = () => {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('useMoviesContext must be used within a MoviesProvider')
  }
  return context
}

const MoviesContextProvider = ({ children }: PropsWithChildren) => {
  const [moviesData, setMoviesData] = useState<Movies>(initialMoviesData)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchMovies = useCallback(
    async (filter: string) => {
      if (moviesData[filter].length === 0) {
        try {
          setIsLoading(true)
          const data = await getMovies(filter)
          setMoviesData((prevMoviesData) => ({
            ...prevMoviesData,
            [filter]: data,
          }))
        } catch (error) {
          console.error('Erro ao buscar filmes: ', error)
        } finally {
          setIsLoading(false)
        }
      }
    },
    [moviesData, setMoviesData]
  )

  const value = { moviesData, isLoading, fetchMovies }

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  )
}

export default MoviesContextProvider
