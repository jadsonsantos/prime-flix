import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Favorites from 'pages/Favorites'
import Home from 'pages/Home'
import Movie from 'pages/Movie'
import MoviesContainer from 'pages/MoviesContainer'
import NotFound from 'pages/NotFound'
import Person from 'pages/Person'
import Search from 'pages/Search'
import SeriesContainer from 'pages/SeriesContainer'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } from 'constants/filters'
import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  NOW_PLAYING_ROUTE,
  POPULAR_ROUTE,
  TOP_RATED_ROUTE,
  UPCOMING_ROUTE,
} from 'constants/routes'
import {
  AIRING_TODAY,
  ON_THE_AIR,
  POPULAR_TV,
  TOP_RATED_TV,
} from 'constants/tvFilters'
import {
  AIRING_TODAY_ROUTE,
  ON_THE_AIR_ROUTE,
  POPULAR_TV_ROUTE,
  TOP_RATED_TV_ROUTE,
  TV_DETAILS_ROUTE,
  TV_HOME_ROUTE,
} from 'constants/tvRoutes'

const RoutesApp = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Routes>
        {/* Rotas existentes de filmes */}
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={NOW_PLAYING_ROUTE}
          element={<MoviesContainer title="Em exibição" filter={NOW_PLAYING} />}
        />
        <Route
          path={POPULAR_ROUTE}
          element={<MoviesContainer title="Populares" filter={POPULAR} />}
        />
        <Route
          path={TOP_RATED_ROUTE}
          element={<MoviesContainer title="Mais votados" filter={TOP_RATED} />}
        />
        <Route
          path={UPCOMING_ROUTE}
          element={<MoviesContainer title="Em breve" filter={UPCOMING} />}
        />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path={TV_DETAILS_ROUTE} element={<Movie />} />

        {/* Novas rotas de séries */}
        <Route
          path={TV_HOME_ROUTE}
          element={<SeriesContainer title="Séries" filter={POPULAR_TV} />}
        />
        <Route
          path={AIRING_TODAY_ROUTE}
          element={
            <SeriesContainer title="Exibindo Hoje" filter={AIRING_TODAY} />
          }
        />
        <Route
          path={ON_THE_AIR_ROUTE}
          element={<SeriesContainer title="No Ar" filter={ON_THE_AIR} />}
        />
        <Route
          path={POPULAR_TV_ROUTE}
          element={
            <SeriesContainer title="Séries Populares" filter={POPULAR_TV} />
          }
        />
        <Route
          path={TOP_RATED_TV_ROUTE}
          element={
            <SeriesContainer
              title="Séries Mais Votadas"
              filter={TOP_RATED_TV}
            />
          }
        />

        {/* Outras rotas existentes */}
        <Route path={FAVORITES_ROUTE} element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)

export default RoutesApp
