import styled from 'styled-components'

import theme from '../../styles/theme'

interface IModalProps {
  color?: string
}

export const ModalTitle = styled.h4<IModalProps>`
  color: ${props => (props.color ? props.color : theme.colors.primary400)};
`
export const ModalDescriptionWrapper = styled.div`
  text-align: center;
`

export const ModalToodooContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    max-width: 60%;
  }
`
