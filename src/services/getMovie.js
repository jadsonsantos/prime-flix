import api from './api'
import options from './options'

const getMovie = async (id) => {
  const response = await api.get(`/movie/${id}`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getMovie
