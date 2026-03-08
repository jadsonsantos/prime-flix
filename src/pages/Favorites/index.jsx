import Movies from 'components/Movies'
import Title from 'components/Title'

import useFavorites from './useFavorites'

const Favorites = () => {
  const { favorites } = useFavorites()

  return (
    <section className="favorites-page">
      <div className="container">
        <Title>Meus favoritos</Title>
        {favorites.length > 0 ? (
          <Movies movies={favorites} />
        ) : (
          <p>Você não possui favoritos salvos</p>
        )}
      </div>
    </section>
  )
}

export default Favorites
