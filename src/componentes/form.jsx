import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {browserHistory} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentUndo from 'material-ui/svg-icons/content/undo'

const usuario = {
  nome      : 'João',
  sobrenome : 'Silva',
  foto      : 'https://cdn4.iconfinder.com/data/icons/STROKE/communications/png/400/avatar.png',
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: ''
    }
  }

  handleChangeTexto = (event, value) => {
    if(value.length <= 140) {
      this.setState({
        texto: value
      })
    }
  }

  handleEnviar = () => {
    if(this.state.texto) {
      this.props.socket.emit('novoTweet', {
        usuario: usuario,
        texto: this.state.texto,
      })
      browserHistory.push('/')
    }
  }

  handleCancelar = () => this.setState({texto: ''})

  handleVoltar = () => browserHistory.push('/')

  render() {
    let styleForm = {
      marginTop: 100
    }

    return (
      <div style={styleForm}>
        <Paper className="elemento col-xs-12 col-md-8 col-md-offset-2" zDepth={1}>
          <TextField
            value={this.state.texto}
            onChange={this.handleChangeTexto}
            floatingLabelText={(!this.state.texto)? "Bora escrever!" : this.state.texto.length.toString() + " caracteres"}
            fullWidth={true}
            multiLine={true}
          />
          <FlatButton onTouchTap={this.handleCancelar} className="botao" primary={true} label="Cancelar" />
          <RaisedButton onTouchTap={this.handleEnviar} className="botao" primary={true} label="Enviar" />
        </Paper>
        <FloatingActionButton className="botaoFlutuante" onTouchTap={this.handleVoltar}>
          <ContentUndo />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Form
