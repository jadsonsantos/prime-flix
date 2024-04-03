import Movies from 'components/Movies'
import Title from 'components/Title'

import usePersonMovieCredits from 'hooks/usePersonMovieCredits'

const PersonMovieCredits = () => {
  const { personMovieCredits } = usePersonMovieCredits()

  return (
    <>
      <Title>Aparece em:</Title>
      <Movies movies={personMovieCredits} />
    </>
  )
}

export default PersonMovieCredits
