import React from 'react'
import { ModalTitle, ModalToodooContainer } from './styles'

interface IErrorModalProps {
  title: string
  description: string
  image: string
  color?: string
}

const Modal: React.FC<IErrorModalProps> = ({
  title,
  description,
  color,
  image
}) => {
  return (
    <ModalToodooContainer>
      <img src={image} alt="Error Icon" />
      <ModalTitle className="mt-3" color={color}>
        {title}
      </ModalTitle>
      <p className="text-muted mb-5">{description}</p>
    </ModalToodooContainer>
  )
}

export default Modal
