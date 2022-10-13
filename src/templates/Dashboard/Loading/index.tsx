import React from 'react'

import Lottie from 'react-lottie'

import animationData from '../../../assets/lotties/toodoo-animation.json'

import { Container } from './styles'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={192}
        width={192}
        style={{ cursor: 'default' }}
      />
    </Container>
  )
}

export default Loading
