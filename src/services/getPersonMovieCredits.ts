import api from './api'
import options from './options'

const getPersonMovieCredits = async (id: string) => {
  const response = await api.get(`/person/${id}/movie_credits`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getPersonMovieCredits
