import { useState } from 'react'

import getCollection from 'services/getCollection'

import propType from 'prop-types'

const useCollection = () => {
  const [collections, setCollections] = useState(null)

  const fetchCollection = async (id) => {
    try {
      const response = await getCollection(id)
      setCollections(response.data)
    } catch (error) {
      console.error('Erro ao buscar a coleção: ', error)
    }
  }

  return { collections, fetchCollection }
}

getCollection.propType = {
  id: propType.string,
}

export default useCollection
