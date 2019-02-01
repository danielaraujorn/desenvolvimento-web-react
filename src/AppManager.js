import React from 'react'
import { usuario } from '../config'
import { getTweetsQuery, addAuthorMutation } from './query'

class AppManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      session: false,
    }
  }

  componentWillMount() {
    this.props.route.client.mutate({
      mutation: addAuthorMutation,
      variables: usuario
    }).then(result => this.setSession(result.data.addAuthor.codAuthor))
    
    this.props.route.client.query({ query: getTweetsQuery })
      .then(result => this.tweetsRecebidos(result.data.tweets))
  }

  setSession = session => this.setState({ session })

  tweetsRecebidos = tweets => this.setState({ tweets })

  render() {
    console.log('tweetsRecebidos', tweetsRecebidos);
    
    const { tweetsRecebidos } = this
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(child, {
        ...this.props.route, ...this.state, tweetsRecebidos,
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
