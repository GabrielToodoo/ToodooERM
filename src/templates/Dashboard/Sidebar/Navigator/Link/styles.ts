import styled, { css } from 'styled-components'

import theme from '../../../../../styles/theme'

interface WrapperProps {
  active?: boolean
}

export const Wrapper = styled.a<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 32px;
  height: 48px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  color: ${theme.colors.gray600};

  ${props =>
    props.active &&
    css`
      background-color: ${theme.colors.primary50};
      color: ${theme.colors.primary400};
    `}

  span {
    margin-right: 24px;
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

  &:after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    height: inherit;
    width: 5px;
    background: ${theme.colors.primary400};
    left: 0;
  }
`
