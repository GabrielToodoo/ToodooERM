import styled from 'styled-components'

import theme from '../../styles/theme'

interface IBackgroundProps {
  source: string
}

interface IProfilePicture {
  source: string
}

export const ProfileWrapper = styled.div`
  position: relative;
  .edit-button {
    position: absolute;
    margin: 16px 26px;
    padding: 14px;
    background: ${theme.colors.colorSuccess};
    border-radius: 100%;
    border: none;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`

export const ProfileBgWrapper = styled.div`
  position: relative;
  height: 150px;
`

export const ProfileBackground = styled.div<IBackgroundProps>`
  position: absolute;
  width: 100%;
  height: 216px;
  background-image: url(${props => props.source});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
`

export const ProfileContent = styled.div`
  top: 150px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: end;
  gap: 48px;
  margin-left: 88px;
`

export const ProfileSocial = styled.div`
  display: flex;
  gap: 10px;
`

export const ProfilePicture = styled.div<IProfilePicture>`
  position: relative;
  width: 216px;
  height: 216px;
  background-image: url(${props => props.source});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 8px solid #ffffff;
  border-radius: 50%;
  z-index: 1;

  button {
    margin: 0 !important;
    border: 4px solid #ffffff !important;
    border-radius: 50%;
  }
`

export const ProfileDescription = styled.div`
  margin-bottom: 28px;

  h3 {
    color: ${theme.colors.gray700};
    margin-bottom: 8px;
  }

  p {
    color: ${theme.colors.gray400};
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
