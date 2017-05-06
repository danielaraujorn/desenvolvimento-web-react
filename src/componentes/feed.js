import React from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import {browserHistory} from 'react-router'

import Tweet from './tweet'

class Feed extends React.Component {
  tweetar = () => {
    browserHistory.push('/novo')
  }

  render() {
  	let listaTweets = null
    if(this.props.tweets) {
      listaTweets = this.props.tweets.map((item) => {
        return <Tweet key={item.id} tweet={item} socket={this.props.socket} />
      })
      console.log('listaTweets - ', listaTweets)
    }

    return (
      <div>
        {listaTweets}
        <FloatingActionButton className="botaoFlutuante" onTouchTap={this.tweetar}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Feed
