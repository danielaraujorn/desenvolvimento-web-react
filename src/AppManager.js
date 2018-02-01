import React from 'react'

class AppManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
    }
  }

  componentWillMount() {
    this.props.route.socket.emit('pedirTweets')
    this.props.route.socket.on('todosTweets', this.tweetsRecebidos)
  }

  tweetsRecebidos = (tweets) => {
    this.setState({ tweets })
  }

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
