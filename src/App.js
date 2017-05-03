import React, {
	Component
} from 'react';
import './App.css';
import Form from './componentes/form.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tweet from './componentes/tweet';
var tweets = [{
	usuario: {
		nome: "Gabriel",
		sobrenome: "Tiburcio",
		foto: "https://avatars3.githubusercontent.com/u/5959178?v=3&s=460"
	},
	data_publicacao: "20/04/2017",
	texto: "Javascript parece daora, acho que todos deveriam aprender.",
	likes: 3
}, {
	usuario: {
		nome: "Diego",
		sobrenome: "Cabral",
		foto: "http://placehold.it/100x100"
	},
	data_publicacao: "20/04/2017",
	texto: "Realmente, Javascript tem cara de futuro.",
	likes: 3
}, {
	usuario: {
		nome: "Judson",
		sobrenome: "Costa",
		foto: "http://placehold.it/100x100"
	},
	data_publicacao: "21/04/2017",
	texto: "Prefiro python",
	likes: 999
}, {
	usuario: {
		nome: "Daniel",
		sobrenome: "Araújo",
		foto: "http://placehold.it/100x100"
	},
	data_publicacao: "21/04/2017",
	texto: "Só é bom quem faz site em assembly",
	likes: -99
}];


class App extends Component {
	render() {
		let listaTweets = tweets.map((tweet,id)=>{
		   return <Tweet key={id} tweet={tweet}/>
		})
		return ( < div >
			< MuiThemeProvider >
				<div class="container">
					<div class="row">
						< Form / >
						{ listaTweets }
					</div>
				</div>
			< /MuiThemeProvider> < /div>
		);
	}
}

export default App;