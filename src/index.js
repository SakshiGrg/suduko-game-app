import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Content, Title, Card, SudokuGrid } from './components'
import { GlobalStyles, theme } from './styles'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title">Suduko</Title>
        <Card data-cy="card">
          <SudokuGrid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
)
reportWebVitals()
