import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #e5e5e5;
}

body,
input {
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
}

button {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  cursor: pointer;
}

h1,
h2,
h3 {
  font-weight: 700;
}

h4,
h5,
h6 {
  font-weight: 600;
}

h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.2px;
}

h1 {
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.5px;
}

h2 {
  font-size: 40px;
  line-height: 44px;
}

h3 {
  font-size: 32px;
  line-height: 40px;
}

h4 {
  font-size: 24px;
  line-height: 32px;
}

h5 {
  font-size: 20px;
  line-height: 24px;
}

h6 {
  font-size: 18px;
  line-height: 24px;
}

a {
  text-decoration: none;
}

.text-muted {
  color: ${theme.colors.gray500}
}

.text-light-muted {
  color: ${theme.colors.gray400}
}

.modal-header {
  border-bottom: none !important;
}

.modal-content {
  border: none;
}

`
