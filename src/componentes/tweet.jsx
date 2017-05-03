import React from 'react';
import './tweet.css';
import FlatButton from 'material-ui/FlatButton';
import IconLiked from 'material-ui/svg-icons/action/favorite';
import IconNotLiked from 'material-ui/svg-icons/action/favorite-border';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
class Tweet extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          likes: this.props.tweet.likes,
          jaDeuLike: false
      };
  }

  like=()=>{
      if(!this.state.jaDeuLike) {
        this.setState({ likes: this.state.likes + 1, jaDeuLike: true });
      }
      console.log("vai")
  }

  render() {
    var tweet = this.props.tweet;
    return (
      <Card className="elemento col-xs-12 col-md-8 col-md-offset-2">
        <CardHeader
          title={tweet.usuario.nome + ' ' + tweet.usuario.sobrenome}
          subtitle={tweet.data_publicacao}
          avatar={tweet.usuario.foto}
        />
        <CardText>
          {tweet.texto}
        </CardText>
        <CardActions style={{float:"right"}}>
          <FlatButton
                onTouchTap={this.like}
                target="_blank"
                label={this.state.likes+" likes"}
                secondary={true}
                icon={(!this.state.jaDeuLike)?<IconNotLiked/>:<IconLiked/>}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Tweet;