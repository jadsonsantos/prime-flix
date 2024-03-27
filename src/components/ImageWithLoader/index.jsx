import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

const ImageWithLoader = ({
  src,
  placeholderSrc,
  loading = 'lazy',
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc)

  const style = {
    width: '100%',
    height: 'auto',
  }

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setImageSrc(src)
  }, [src])

  return <img style={style} src={imageSrc} loading={loading} {...rest} />
}

ImageWithLoader.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.string,
  placeholderSrc: PropTypes.string,
}

export default ImageWithLoader
