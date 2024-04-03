import Loading from 'components/Loading'
import Person from 'components/Person'
import PersonMovieCredits from 'components/PersonMovieCredits'

import usePersonDetails from 'hooks/usePersonDetails'

const PersonPage = () => {
  const { isLoading } = usePersonDetails()

  if (isLoading) return <Loading text="Carregando detalhes..." />

  return (
    <div className="person-page">
      <div className="container">
        <Person />
        <PersonMovieCredits />
      </div>
    </div>
  )
}

export default PersonPage
