import styled from 'styled-components'

import theme from '../../styles/theme'

export const FileInputWrapper = styled.div`
  label {
    display: block;
    color: ${theme.colors.gray500};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
  }
`

export const FileInputFakeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: dashed 1.5px;
  background: ${theme.colors.primary50};
  cursor: pointer;
  height: 60px;
  transition: 0.3s;
  width: 100%;
  font-size: 14px;
  color: ${theme.colors.primary400};

  svg {
    margin-right: 8px;
  }
`
