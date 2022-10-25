import styled from 'styled-components'

import { BadgeType } from '.'

import theme from '../../styles/theme'

interface BadgeProps {
  type: BadgeType
}

export const Container = styled.span<BadgeProps>`
  border-radius: 2px;
  color: white;
  padding: 5px 16px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  background: ${props =>
    props.type === BadgeType.ERROR
      ? theme.colors.colorError
      : props.type === BadgeType.SUCCESS
      ? theme.colors.colorSuccess
      : theme.colors.colorWarningDark};
`
