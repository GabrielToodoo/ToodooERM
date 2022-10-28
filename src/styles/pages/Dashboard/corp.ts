import styled from 'styled-components'

import theme from '../../theme'

export const BenefitsList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 24px;

  li {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 12px 0;
    font-size: 14px;
    color: ${theme.colors.gray600};

    span {
      font-weight: 500;
      color: ${theme.colors.primary500};
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  li + li {
    &::after {
      position: absolute;
      content: '';
      top: -0.5px;
      height: 1px;
      left: -32px;
      background-color: ${theme.colors.gray100};
      width: calc(100% + 64px);
    }
  }
`

export const VerticalTimeline = styled.ul`
  position: relative;

  padding: 0;
  margin: 16px 0 24px 0;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    left: 24px;
    height: 100%;
    border-left: dashed 1px ${theme.colors.primary500};
  }

  li + li {
    margin-top: 32px;
  }

  li {
    display: flex;
    position: relative;
    align-items: center;

    width: 100%;
    height: 48px;

    .tm-item {
      padding-left: 12px;
      margin-right: auto;

      .h5 {
        margin-bottom: 2px;
      }
    }

    &::before {
      positon: absolute;
      content: '$';
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;

      top: 0;
      left: -56px;

      width: 48px;
      height: 48px;
      border-radius: 48px;

      color: white;
      background-color: ${theme.colors.primary500};
    }
  }
`
