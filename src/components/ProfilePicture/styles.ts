import styled from 'styled-components'

interface IProfilePictureBox {
  source: string
}

export const ModalWrapper = styled.div``

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 5px;
  max-width: 300px;
  margin: auto;
  margin-top: 40px;
`

export const ProfilePictureBox = styled.div<IProfilePictureBox>`
  width: 174px;
  height: 174px;
  background: url(${props => props.source});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
