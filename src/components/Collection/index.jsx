import React from 'react'

import { API_IMAGE_URL } from 'constants'
import PropTypes from 'prop-types'

import './Collection.scss'

const Collection = ({ collection }) => {
  const { backdrop_path, name } = collection

  const style = {
    backgroundImage: `url(${API_IMAGE_URL}${backdrop_path})`,
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
