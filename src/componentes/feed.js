import React,{Component} from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import {browserHistory} from 'react-router'

import Tweet from './tweet'

/*
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
*/

class Feed extends Component {
  tweetar = () => {
    browserHistory.push('/novo')
  }

  render() {
  	let listaTweets = null
    if(this.props.tweets !== null && this.props.tweets !== undefined) {
      listaTweets = this.props.tweets.map((item) => {
        return <Tweet key={item.id} tweet={item} socket={this.props.socket} />
      })
      console.log('listaTweets - ', listaTweets)
    }

    return (
      <div className="container">
        <div className="row">
          {listaTweets}
          <FloatingActionButton className="botaoFlutuante" onTouchTap={this.tweetar}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default Feed
