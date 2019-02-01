import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
  Route,
  Router,
  IndexRoute,
  Redirect,
  browserHistory
} from 'react-router'
import ApolloClient from 'apollo-boost'
import AppManager from './AppManager'
import Form from './componentes/form'
import Feed from './componentes/feed'
import { graphql } from '../config'

const client = new ApolloClient(graphql)
injectTapEventPlugin()

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={AppManager} client={client}>
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
