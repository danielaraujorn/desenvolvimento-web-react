import React from 'react'
import Tweet from './tweet'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {browserHistory} from 'react-router'

class Feed extends React.Component {
	tweetar = () => browserHistory.push('/novo')

  render() {
    let listaTweets = this.props.tweets.map((item) => {
      return <Tweet key={item.id} tweet={item} />
    })

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
