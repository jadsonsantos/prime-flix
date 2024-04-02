import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getPersonDetails from 'services/getPersonDetails'

import Person from 'interfaces/person'

const initialPersonState = {
  adult: false,
  also_known_as: [],
  biography: '',
  birthday: '',
  deathday: null,
  gender: 0,
  homepage: null,
  id: 0,
  imdb_id: '',
  known_for_department: '',
  name: '',
  place_of_birth: '',
  popularity: 0,
  profile_path: '',
}

const usePersonDetails = () => {
  const [person, setPerson] = useState<Person>(initialPersonState)
  const { id } = useParams()

  const fetchPersonDetails = async () => {
    try {
      const response = await getPersonDetails(id as string)
      setPerson(response.data)
    } catch (error) {
      console.error('Erro ao buscar pessoa: ', error)
    }
  }

  useEffect(() => {
    fetchPersonDetails()
  }, [])

  return { person }
}

export default usePersonDetails
