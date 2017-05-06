import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import {Route, Router, IndexRoute, Redirect, browserHistory} from 'react-router'

import AppManager from './AppManager'
import Form from './componentes/form'
import Feed from './componentes/feed'

import io from 'socket.io-client'
const socket = io('http://localhost:3001')

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={AppManager} socket={socket}>
            <IndexRoute component={Feed} />
            <Route path="novo" component={Form} />
          </Route>
          <Redirect from="*" to="/" />
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
