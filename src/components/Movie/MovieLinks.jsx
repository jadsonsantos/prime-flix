import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaImdb } from 'react-icons/fa'

import CustomLink from 'components/CustomLink'

import useExternalIDs from 'hooks/useExternalIDs'

const MovieLinks = () => {
  const { externalIDs } = useExternalIDs()

  const { instagram_id, facebook_id, twitter_id, imdb_id } = externalIDs
  const size = 20

  return (
    <ul className="movie__links">
      {imdb_id && (
        <CustomLink href={`https://www.imdb.com/title/${imdb_id}/`}>
          <FaImdb size={size} />
        </CustomLink>
      )}

      {instagram_id && (
        <CustomLink href={`https://instagram.com/${instagram_id}/`}>
          <FaInstagram size={size} />
        </CustomLink>
      )}

      {facebook_id && (
        <CustomLink href={`https://facebook.com/${facebook_id}/`}>
          <FaFacebook size={size} />
        </CustomLink>
      )}

      {twitter_id && (
        <CustomLink href={`https://twitter.com/${twitter_id}/`}>
          <FaTwitter size={size} />
        </CustomLink>
      )}
    </ul>
  )
}

export default MovieLinks
