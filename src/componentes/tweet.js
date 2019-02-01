import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import IconLiked from 'material-ui/svg-icons/action/favorite'
import IconNotLiked from 'material-ui/svg-icons/action/favorite-border'
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card'

class Tweet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jaDeuLike: false,
    }
  }

  formatarData = tdate => {
    const system_date = new Date(Date.parse(tdate))
    const user_date = new Date()
    const diff = Math.floor((user_date - system_date) / 1000)
    if (diff <= 1) return 'agorinha'
    if (diff < 20) return `há ${diff} segundos atrás`
    if (diff < 40) return 'há meio minuto'
    if (diff < 60) return 'há menos de um minuto'
    if (diff <= 90) return 'há um minuto'
    if (diff <= 3540) return `há ${Math.round(diff / 60)} minutos`
    if (diff <= 5400) return 'há 1 hora'
    if (diff <= 86400) return `há ${Math.round(diff / 3600)} horas`
    if (diff <= 129600) return 'há 1 dia'
    if (diff < 604800) return `há ${Math.round(diff / 86400)} dias`
    if (diff <= 777600) return 'há 1 semana'
    return 'em 1900 e vovó era novinha'
  }

  like = () => {
    if(!this.state.jaDeuLike) {
      const { codTweet, likes } = this.props.tweet
      this.props.socket.emit('likeTweet', { codTweet })
      this.setState({ jaDeuLike: true, likes: likes + 1 })
    }
  }

  render() {
    const { tweet } = this.props
    const styleCardText = {
      wordWrap: 'break-word'
    }

    return (
      <Card className="elemento col-xs-12 col-md-8 col-md-offset-2">
        <CardHeader
          title={`${tweet.author.nome} ${tweet.author.sobrenome}`}
          subtitle={this.formatarData(tweet.data_publicacao)}
          avatar={tweet.author.foto}
        />
        <CardText style={styleCardText}>
          {tweet.texto}
        </CardText>
        <CardActions style={{float: 'right'}}>
          <FlatButton
            onTouchTap={this.like}
            target="_blank"
            label={tweet.likes + ' likes'}
            secondary={true}
            icon={(!this.state.jaDeuLike) ? <IconNotLiked/> : <IconLiked/>}
          />
        </CardActions>
      </Card>
    )
  }
}

export default Tweet