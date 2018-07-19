import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// components
import Top from './components/pages/top/'
import Live from './components/pages/live/'
import Contact from './components/pages/contact/'

export default () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/live' component={Live} />
        <Route exact path='/' component={Top} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
)
