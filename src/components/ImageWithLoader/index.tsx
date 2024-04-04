import { useState, useEffect, ComponentProps } from 'react'

type ImageWithLoaderProps = ComponentProps<'img'> & {
  placeholderSrc: string
}

const ImageWithLoader = ({
  src,
  placeholderSrc,
  loading = 'lazy',
  ...rest
}: ImageWithLoaderProps) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc)

  const style = {
    width: '100%',
    height: 'auto',
  }

  useEffect(() => {
    const img = new Image()
    img.src = src!
    img.onload = () => setImageSrc(src!)
  }, [src])

  return <img style={style} src={imageSrc} loading={loading} {...rest} />
}

export default ImageWithLoader
