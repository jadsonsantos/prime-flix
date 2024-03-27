import React, { useEffect } from 'react'

import Movies from 'components/Movies'

import useCollection from 'hooks/useCollection'

import { API_IMAGE_URL } from 'constants'
import PropTypes from 'prop-types'

import './Collection.scss'

const Collection = ({ collection }) => {
  const { backdrop_path, name, id } = collection

  const { collections, fetchCollection } = useCollection()

  useEffect(() => {
    fetchCollection(id)
  }, [])

  const style = {
    backgroundImage: `url(${API_IMAGE_URL}${backdrop_path})`,
  }

  return (
    <>
      <section className="collection" style={style}>
        <div className="collection__infos">
          <h2 className="collection__title">Parte de {name}</h2>
          <p className="collection__paragraph">{collections?.overview}</p>
        </div>
      </section>
      {collections?.parts && <Movies movies={collections?.parts} />}
    </>
  )
}

Collection.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
  }),
}

export default Collection
