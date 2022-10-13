import styled, { css } from 'styled-components'

import theme from '../../styles/theme'

interface INavLinkProps {
  active?: boolean
}

export const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 272px;
  background: #ffffff;
  box-shadow: 12px 0px 20px rgba(17, 19, 28, 0.02),
    2px 0px 6px rgba(17, 19, 28, 0.02), 0px 0px 1px rgba(17, 19, 28, 0.02);
`

export const NavBarHeader = styled.div`
  padding: 52px 42px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  img:first-child {
    margin-right: 24px;
  }
`

export const NavBarContent = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 30px;
`

export const NavLink = styled.a<INavLinkProps>`
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 32px;
  cursor: pointer;

  height: 48px;
  width: 100%;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  color: ${theme.colors.gray600};

  &:after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    height: 100%;
    width: 4px;
    background: ${theme.colors.primary400};
    left: 0;
  }

  &:hover {
    ${props =>
      props.active
        ? css``
        : css`
            background-color: ${theme.colors.gray100};
            color: ${theme.colors.gray600};
          `}
  }

  ${props =>
    props.active &&
    css`
      background-color: ${theme.colors.primary50};
      color: ${theme.colors.primary400};
    `}

  strong {
    font-weight: 700;
    font-size: 10px;
    color: ${theme.colors.gray400};
  }

  img {
    margin-right: 32px;
  }

  svg {
    margin-right: 24px;
  }
`

export const NavCategory = styled.div`
  margin-top: 35px;
  border-top: 1px solid ${theme.colors.gray100};
  border-bottom: 1px solid ${theme.colors.gray100};
`

export const NavBarFooter = styled.div`
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 24px 32px 24px 32px;

  .name {
    max-width: 140px;
    padding: 0 12px;
    margin-right: auto;

    strong {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      display: block;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  strong {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
  }

  p {
    font-size: 10px;
  }
`
