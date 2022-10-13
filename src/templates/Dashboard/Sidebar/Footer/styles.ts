import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 40px 32px;
`

export const Avatar = styled.img.attrs({
  width: 40,
  heigth: 40,
  alt: 'Avatar'
})`
  object-position: center;
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 40px;
`

export const Profile = styled.div`
  flex: 1;
  margin: 0 auto 0 4px;
  max-width: 132px;
  padding: 0 12px;

  strong {
    font-size: 14px;
  }

  p {
    margin: 0;
    font-size: 12px;
  }

  strong,
  p {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Button = styled.div.attrs({ className: 'dropup' })``
