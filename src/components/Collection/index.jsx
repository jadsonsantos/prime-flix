import React from 'react'

import PropTypes from 'prop-types'

import './Collection.scss'

const Collection = ({ collection }) => {
  const { backdrop_path, name } = collection

  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    backgroundSize: 'cover',
  }

  return (
    <section className="collection" style={style}>
      <h2 className="collection__title">Parte de {name}</h2>
    </section>
  )
}

Collection.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
  }),
}

export default Collection
