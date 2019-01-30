import React from 'react'
import { usuario } from '../config'

class AppManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      session: false,
    }
  }

  componentWillMount() {
    this.props.route.socket.emit('getTweets')
    this.props.route.socket.on('tweets', this.tweetsRecebidos)
    this.props.route.socket.emit('addAuthor', usuario)
    this.props.route.socket.on('author', this.autorRecebido)
  }

  autorRecebido = codAuthor => this.setState({ session: codAuthor })

  tweetsRecebidos = tweets => this.setState({ tweets })

  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(child, {
        ...this.props.route, ...this.state
      })
    )

    return (
      <div className="container">
        <div className="row">
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default AppManager
