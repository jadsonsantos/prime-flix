import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getExternalIDs from 'services/getExternalIDs'

const useExternalIDs = () => {
  const [externalIDs, setExternalIDs] = useState('')
  const { id } = useParams()

  const fetchExternalIDs = async () => {
    try {
      const response = await getExternalIDs(id)
      setExternalIDs(response.data)
    } catch (error) {
      console.error('Erro ao buscar os IDs externos do filme: ', error)
    }
  }

  useEffect(() => {
    fetchExternalIDs()
  }, [])

  return { externalIDs }
}

export default useExternalIDs
