import { Link } from 'react-router-dom'

import ImageWithLoader from 'components/ImageWithLoader'
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
            : 'https://placehold.co/335x500'

          return (
            <li key={actor.id} className="credits__item">
              <Link to={`/person/${actor.id}`}>
                <ImageWithLoader
                  src={imagePath}
                  placeholderSrc="https://placehold.co/335x500"
                  className="credits__image"
                  alt={actor.name}
                  width={335}
                  height={500}
                />
                <p className="credits__name">
                  {actor.name} - {actor.character}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Credits
