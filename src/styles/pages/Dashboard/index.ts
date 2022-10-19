import styled from 'styled-components'

import theme from '../../theme'

interface NewsBoxProps {
  department: 'Recursos Humanos' | 'Financeiro'
}

export const NewsTitle = styled.h5`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${theme.colors.primary400};
`

export const NewsContainer = styled.div``

export const VacationHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const VacationContainer = styled.div.attrs({
  className: 'row'
})`
  margin-top: 40px;

  strong {
    font-weight: 700;
    font-size: 12px;
    color: ${theme.colors.gray400};
  }
`

export const NewsBox = styled.div<NewsBoxProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1;

  padding: 12px 16px;

  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 8px;

  box-shadow: 0px 2px 4px rgba(22, 22, 32, 0.15),
    0px 0px 2px rgba(22, 22, 32, 0.12), 0px 0px 1px rgba(22, 22, 32, 0.04);

  img {
    object-position: center;
    object-fit: cover;
  }

  h4 {
    color: ${theme.colors.primary600};
    font-size: 18px;
    line-height: 16px;
  }

  .description {
    flex: 1;
    justify-content: center;
    margin-left: 24px;
  }

  span {
    background-color: ${props =>
      props.department === 'Financeiro'
        ? theme.colors.colorSuccess
        : theme.colors.primary300};
    font-weight: 600;
    margin-right: 15px;
    border-radius: 5px;
  }

  svg {
    cursor: pointer;
  }

  /*
  &:last-child {
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -13px;
      left: 20px;
      height: 13px;
      z-index: -1;
      width: calc(100% - 18px);
      background: red;
      border-radius: 0px 0px 5px 5px;
      margin-bottom: 8px;

      box-shadow: 0px 2px 4px rgba(22, 22, 32, 0.15),
        0px 0px 2px rgba(22, 22, 32, 0.12), 0px 0px 1px rgba(22, 22, 32, 0.04);
    }
  }
  */
`

export const BirthdayDetails = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 14px;

    color: ${theme.colors.primary600};
    margin: 0;
    padding: 0;
  }

  span {
    font-size: 12px;

    color: ${theme.colors.gray400};
  }
`
