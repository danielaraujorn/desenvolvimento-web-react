import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentUndo from 'material-ui/svg-icons/content/undo'
import { browserHistory } from 'react-router'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: ''
    }
  }

  handleChangeTexto = (_, texto) => texto.length <= 140 && this.setState({ texto })

  handleEnviar = () => {
    if(this.state.texto) {
      this.props.socket.emit('addTweet', {
        codAuthor: this.props.session,
        texto: this.state.texto,
      })
      browserHistory.push('/')
    }
  }

  handleCancelar = () => this.setState({ texto: '' })

  handleVoltar = () => browserHistory.push('/')

  render() {
    const styleForm = {
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
    }

    return (
      <div style={styleForm}>
        <Paper className="elemento col-xs-12 col-md-8 col-md-offset-2" zDepth={1}>
          <TextField
            value={this.state.texto}
            onChange={this.handleChangeTexto}
            floatingLabelText={(!this.state.texto)? 'Bora escrever!' : this.state.texto.length.toString() + ' caracteres'}
            fullWidth={true}
            multiLine={true}
          />
          <RaisedButton
            onTouchTap={this.handleEnviar}
            className="botao"
            primary={true}
            label="Enviar"
            disabled={!(this.props.session && this.state.texto)}
          />
          <FlatButton onTouchTap={this.handleCancelar} className="botao" primary={true} label="Limpar" />
        </Paper>
        <FloatingActionButton className="botaoFlutuante" onTouchTap={this.handleVoltar}>
          <ContentUndo />
        </FloatingActionButton>
      </div>
    )
  }
}

export default Form
