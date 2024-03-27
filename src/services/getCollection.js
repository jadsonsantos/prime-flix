import api from './api'
import options from './options'

const getCollection = async (id) => {
  const response = await api.get(`/collection/${id}`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getCollection
