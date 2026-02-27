import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { MdImageNotSupported } from 'react-icons/md'

import ImageWithLoader from 'components/ImageWithLoader'

import { API_IMAGE_URL } from 'constants/api'
import usePersonDetails from 'hooks/usePersonDetails'
import scrollToTop from 'utils/scrollToTop '

import Details from './Details'

import './Person.scss'

const Person = () => {
  const { person } = usePersonDetails()
  const { name, profile_path, biography, popularity } = person

  const paragraphs = biography ? biography.split('\n\n').filter(Boolean) : []

  useEffect(() => {
    scrollToTop()
  }, [])

  const imageUrl = profile_path ? `${API_IMAGE_URL}${profile_path}` : null

  return (
    <div className="person">
      <div className="person__sidebar">
        <div className="person__image-wrapper">
          {imageUrl ? (
            <ImageWithLoader
              width={300}
              height={450}
              src={imageUrl}
              placeholderSrc={'https://placehold.co/300x450'}
              alt={name}
              title={name}
              className="person__image"
            />
          ) : (
            <div className="person__no-image">
              <MdImageNotSupported size={60} />
            </div>
          )}
        </div>
      </div>

      <div className="person__content">
        {popularity > 0 && (
          <div className="person__popularity">
            <FaStar className="person__popularity-star" />
            <span>{popularity.toFixed(1)} popularidade</span>
          </div>
        )}

        <h1 className="person__name">{name}</h1>

        <Details person={person} />

        {paragraphs.length > 0 && (
          <div className="person__biography">
            <h2 className="person__section-title">Biografia</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="person__biography-text">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Person
