import React from 'react'

import './Modal.scss'
import PropTypes from 'prop-types'

const Modal = ({ youtubeID, isOpen, onClose }) => {
  const customClassName = isOpen ? 'modal modal--open' : 'modal'

  return (
    <div className={customClassName}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <iframe
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${youtubeID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  )
}

Modal.propTypes = {
  youtubeID: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Modal
