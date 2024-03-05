import React from 'react'

import PropTypes from 'prop-types'

const MovieRoot = ({ children }) => {
  return <div className="movie">{children}</div>
}

MovieRoot.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MovieRoot
