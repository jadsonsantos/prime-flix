import MovieItem from 'components/MovieItem'

import Movie from 'interfaces/movie'
import MovieCredits from 'interfaces/movieCredits'

import './Movies.scss'

interface MoviesProps {
  movies: Movie[] | MovieCredits[]
}

const Movies = ({ movies }: MoviesProps) => {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </section>
  )
}

export default Movies
