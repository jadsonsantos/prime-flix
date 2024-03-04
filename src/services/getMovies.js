import api from './api'
import options from './options'

const getMovies = async (endpoint) => {
  const response = await api.get(`/movie/${endpoint}`, {
    params: {
      ...options,
      page: 1,
    },
  })

  return response.data.results
}

export default getMovies
