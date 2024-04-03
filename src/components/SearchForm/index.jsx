import './SearchForm.scss'
import { IoSearchOutline } from 'react-icons/io5'

import useSearchForm from 'hooks/useSearchForm'

const SearchForm = () => {
  const { search, setSearch, handleSubmit } = useSearchForm()

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Busque um filme"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <button className="search-form__button" type="submit">
        <IoSearchOutline />
      </button>
    </form>
  )
}

export default SearchForm
