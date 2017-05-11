import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Form from './componentes/form'
import Feed from './componentes/feed'
import AppManager from './AppManager'

import {Route, Router, IndexRoute, Redirect, browserHistory} from 'react-router'

import io from 'socket.io-client'
const socket = io('https://domotica-node.herokuapp.com/')

socket.on('connect', () => console.log('conectou'))

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<Router history={browserHistory}>
					<Route path="/" socket={socket} component={AppManager}>
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
