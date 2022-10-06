import React from 'react'

import { Background, Description } from './styles'

interface IDescriptionProps {
  title: string
  subtitle: string
}

interface IAuthProps {
  image: React.ReactElement
  description?: IDescriptionProps
}

const AuthBackground: React.FC<IAuthProps> = ({ image, description }) => {
  return (
    <Background className="d-none d-lg-flex">
      {image}
      {description && (
        <Description>
          <h3>{description.title}</h3>
          <p>{description.subtitle}</p>
        </Description>
      )}
    </Background>
  )
}

export default AuthBackground
