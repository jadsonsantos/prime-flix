import api from './api'
import options from './options'

const getPersonDetails = async (id: string) => {
  const response = await api.get(`/person/${id}`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getPersonDetails
