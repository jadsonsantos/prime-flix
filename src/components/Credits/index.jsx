import React from 'react'

import Title from 'components/Title'

import useCredits from 'hooks/useCredits'

import { API_IMAGE_URL } from 'constants'

import './Credits.scss'

const Credits = () => {
  const { credits } = useCredits()

  return (
    <>
      <Title>Elenco</Title>
      <ul className="credits">
        {credits?.cast?.slice(0, 4).map((actor) => {
          const imagePath = actor.profile_path
            ? `${API_IMAGE_URL}${actor.profile_path}`
            : '../../actor-avatar.svg'

          return (
            <li key={actor.id} className="credits__item">
              <img
                src={imagePath}
                className="credits__image"
                alt={actor.name}
              />
              <p className="credits__name">{actor.name}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Credits
