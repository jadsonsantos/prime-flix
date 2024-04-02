import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import getMovie from 'services/getMovie'

const useMovie = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovie = async () => {
      await getMovie(id)
        .then(({ data }) => {
          setMovie(data)
          setLoading(false)
        })
        .catch(() => {
          navigate('/', { replace: true })
          return
        })
    }

    loadMovie()

    return () => {}
  }, [id])

  const saveMovie = () => {
    const myList = localStorage.getItem('@movies')
    let savedMovies = JSON.parse(myList) || []
    const hasMovie = savedMovies.some((item) => {
      item.id === movie.id
    })

    if (hasMovie) {
      toast.warning('esse filme já está na lista')
      return
    }

    savedMovies.push(movie)
    localStorage.setItem('@movies', JSON.stringify(savedMovies))
    toast.success('filme salvo com sucesso')
  }

  return { saveMovie, loading, movie }
}

export default useMovie
