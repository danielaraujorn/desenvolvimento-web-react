import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Form from './componentes/form'
import Tweet from './componentes/tweet'

const tweets = [{
	usuario: {
		nome: 'Gabriel',
		sobrenome: 'Tiburcio',
		foto: 'https://avatars3.githubusercontent.com/u/5959178?v=3&s=460'
	},
	data_publicacao: '20/04/2017',
	texto: 'Javascript parece daora, acho que todos deveriam aprender.',
	likes: 3
}, {
	usuario: {
		nome: 'Diego',
		sobrenome: 'Cabral',
		foto: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
	},
	data_publicacao: '20/04/2017',
	texto: 'Realmente, Javascript tem cara de futuro.',
	likes: 3
}, {
	usuario: {
		nome: 'Judson',
		sobrenome: 'Costa',
		foto: 'https://cdn4.iconfinder.com/data/icons/STROKE/communications/png/400/avatar.png'
	},
	data_publicacao: '21/04/2017',
	texto: 'Prefiro python',
	likes: 999
}, {
	usuario: {
		nome: 'Daniel',
		sobrenome: 'Araújo',
		foto: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Iron-Man-icon.png'
	},
	data_publicacao: '21/04/2017',
	texto: 'Só é bom quem faz site em assembly',
	likes: -99
}]

class App extends React.Component {
	render() {
		let listaTweets = tweets.map((tweet, id) => {
		   return <Tweet key={id} tweet={tweet} />
		})

		return (
			<div>
				<MuiThemeProvider>
					<div class="container">
						<div class="row">
							<Form />
							{listaTweets}
						</div>
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}

export default App
