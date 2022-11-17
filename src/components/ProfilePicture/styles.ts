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
  position: relative;
  width: 174px;
  height: 174px;
  background: url(${props => props.source});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;

  cursor: pointer;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    content: url('/icons/camera-icon.svg');
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
