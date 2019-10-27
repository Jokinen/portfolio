import React from 'react'
import 'configs'
import { hydrate, render } from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import MetropolisFont from './MetropolisFont'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// add font
let fontStyle = document.createElement('style')
fontStyle.type = 'text/css'
fontStyle.innerHTML = MetropolisFont
document.getElementsByTagName('head')[0].appendChild(fontStyle)
