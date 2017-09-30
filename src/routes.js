import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// components
import Top from './components/pages/top/'
import Schedule from './components/pages/schedule/'
import Contact from './components/pages/contact/'

export default () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/schedule' component={Schedule} />
        <Route exact path='/' component={Top} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
)
