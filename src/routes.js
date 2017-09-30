import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Top from './components/pages/top/'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/test' component={Top} />
      <Route exact path='/' component={Top} />
    </Switch>
  </BrowserRouter>
)
