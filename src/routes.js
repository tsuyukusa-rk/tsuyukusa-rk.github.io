import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// components
import Top from './components/pages/top/'

export default () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Switch>
        <Route path='/test' component={Top} />
        <Route exact path='/' component={Top} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
)
