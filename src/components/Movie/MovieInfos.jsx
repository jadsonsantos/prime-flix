import React from 'react'

import PropTypes from 'prop-types'

const MovieInfos = ({ children }) => {
  return <div className="movie__infos">{children}</div>
}

MovieInfos.propTypes = {
  children: PropTypes.node,
}

export default MovieInfos
