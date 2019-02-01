import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { browserHistory } from 'react-router'
import Tweet from './tweet'

class Feed extends React.Component {
  tweetar = () => browserHistory.push('/novo')

  getTweets = () => this.props.tweets.map((item, ind) => (
    <Tweet key={ind} tweet={item} client={this.props.client} />
  ))

  render() {
    return (
      <div>
        {this.getTweets()}
        <FloatingActionButton className="botaoFlutuante" onTouchTap={this.tweetar}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Feed
