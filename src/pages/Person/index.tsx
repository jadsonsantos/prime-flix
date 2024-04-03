import Loading from 'components/Loading'
import Person from 'components/Person'

import usePersonDetails from 'hooks/usePersonDetails'

const PersonPage = () => {
  const { isLoading } = usePersonDetails()

  return (
    <div className="person-page">
      <div className="container">
        {isLoading ? <Loading text="Carregando detalhes..." /> : <Person />}
      </div>
    </div>
  )
}

export default PersonPage
