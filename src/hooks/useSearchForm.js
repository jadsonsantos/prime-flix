import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useSearchForm = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!search) return

    navigate(`search?q=${search}`)
    setSearch('')
  }

  return { search, setSearch, handleSubmit }
}

export default useSearchForm
