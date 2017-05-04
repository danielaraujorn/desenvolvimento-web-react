import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {hashHistory} from 'react-router'

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
    alert(this.state.texto)
    hashHistory.push('/')
  }

  handleCancelar = () => this.setState({texto: ''})

  handleVoltar = () => hashHistory.push('/')

  render() {
    return (
			<Paper className="elemento col-xs-12 col-md-8 col-md-offset-2" zDepth={1}>
				<TextField
					value={this.state.texto}
					onChange={this.handleChangeTexto}
			    floatingLabelText={(!this.state.texto)? "Bora escrever!" : this.state.texto.length.toString() + " caracteres"}
			    fullWidth={true}
			    multiLine={true}
        />
        <RaisedButton onTouchTap={this.handleVoltar} className="botao" primary={true} label="Voltar" />
		    <RaisedButton onTouchTap={this.handleCancelar} className="botao" primary={true} label="Cancelar" />
	      <RaisedButton onTouchTap={this.handleEnviar} className="botao" primary={true} label="Enviar" />
			</Paper>
    )
  }
}

export default Form
