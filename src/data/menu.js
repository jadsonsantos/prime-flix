import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  NOW_PLAYING_ROUTE,
  POPULAR_ROUTE,
  TOP_RATED_ROUTE,
  UPCOMING_ROUTE,
} from 'constants/routes'
import {
  AIRING_TODAY_ROUTE,
  ON_THE_AIR_ROUTE,
  POPULAR_TV_ROUTE,
  TOP_RATED_TV_ROUTE,
} from 'constants/tvRoutes'

const menu = [
  // Seção de Filmes
  {
    name: 'Filmes',
    link: `${HOME_ROUTE}`,
    submenu: [
      {
        name: 'Em exibição',
        link: `${NOW_PLAYING_ROUTE}`,
      },
      {
        name: 'Populares',
        link: `${POPULAR_ROUTE}`,
      },
      {
        name: 'Mais votados',
        link: `${TOP_RATED_ROUTE}`,
      },
      {
        name: 'Em breve',
        link: `${UPCOMING_ROUTE}`,
      },
    ],
  },
  // Seção de Séries
  {
    name: 'Séries',
    link: '/series',
    submenu: [
      {
        name: 'Exibindo Hoje',
        link: `${AIRING_TODAY_ROUTE}`,
      },
      {
        name: 'No Ar',
        link: `${ON_THE_AIR_ROUTE}`,
      },
      {
        name: 'Populares',
        link: `${POPULAR_TV_ROUTE}`,
      },
      {
        name: 'Mais Votadas',
        link: `${TOP_RATED_TV_ROUTE}`,
      },
    ],
  },
  {
    name: 'Favoritos',
    link: `${FAVORITES_ROUTE}`,
  },
]

export default menu
