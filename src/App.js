import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {history} from './state/store'
import Weather from 'views/Weather'

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </ConnectedRouter>
  )
}

export default App
