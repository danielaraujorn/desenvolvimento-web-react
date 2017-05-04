import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Form from './componentes/form'
import Feed from './componentes/feed'

import {Route, Router, IndexRoute, Redirect, browserHistory} from 'react-router'

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<Router history={browserHistory}>
					<Route path="/">
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
