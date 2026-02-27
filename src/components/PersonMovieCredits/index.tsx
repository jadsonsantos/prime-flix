import MovieCarousel from 'components/MovieCarousel'

import usePersonMovieCredits from 'hooks/usePersonMovieCredits'

const PersonMovieCredits = () => {
  const { personMovieCredits } = usePersonMovieCredits()

  if (!personMovieCredits || personMovieCredits.length === 0) return null

  return (
    <MovieCarousel
      title="Aparece em"
      movies={personMovieCredits}
      showCharacter
    />
  )
}

export default PersonMovieCredits
