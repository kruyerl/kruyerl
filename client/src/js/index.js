import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import 'babel-polyfill'
import { theme } from '../theme/theme'
import { GlobalStyle } from '../theme/GlobalStyle'

require('babel-polyfill')

const Index = () => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <App />
        </>
    </ThemeProvider>
)
ReactDOM.render(<Index />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
