import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  TOP_RATED_ROUTE,
  UPCOMING_ROUTE,
} from 'constants/routes'

const menu = [
  {
    name: 'Em exibição',
    link: `${HOME_ROUTE}`,
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
  {
    name: 'Meus filmes',
    link: `${FAVORITES_ROUTE}`,
  },
]

export default menu
