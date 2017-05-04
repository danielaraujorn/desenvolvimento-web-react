import React from 'react'
import Tweet from './tweet'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {hashHistory} from 'react-router'

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

class Feed extends React.Component {
	tweetar=()=>{
		hashHistory.push('/novo')
	}
  render() {
    let listaTweets = tweets.map((item, id) => {
      return <Tweet key={id} tweet={item} />
    })

    return (
      <div className="container">
        <div className="row">
        {listaTweets}
	      <FloatingActionButton className="botaoadd" onTouchTap={this.tweetar}>
		      <ContentAdd />
		    </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default Feed
