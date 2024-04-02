import { useEffect } from 'react'

import ImageWithLoader from 'components/ImageWithLoader'
import Title from 'components/Title'

import './Person.scss'

import usePersonDetails from 'hooks/usePersonDetails'
import scrollToTop from 'utils/scrollToTop '

import Details from './Details'

import { API_IMAGE_URL } from 'constants/api'

const Person = () => {
  const { person } = usePersonDetails()
  const { name, profile_path, biography } = person

  const texts = biography.split('. ')

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className="person">
      <div className="person__image">
        <ImageWithLoader
          width={300}
          height={450}
          src={`${API_IMAGE_URL}${profile_path}`}
          placeholderSrc={'https://placehold.co/300x450'}
          alt={name}
          title={name}
        />
        <Details person={person} />
      </div>
      <div className="person__details">
        <Title>{name}</Title>
        {biography.length > 0 &&
          texts.map((text) => (
            <p key={text} className="person__biography-item">
              {text}
            </p>
          ))}
      </div>
    </div>
  )
}

export default Person
