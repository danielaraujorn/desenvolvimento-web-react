import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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

  handleEnviar = () => alert(this.state.texto)

  handleCancelar = () => this.setState({texto: ''})

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
  		    <RaisedButton onTouchTap={this.handleCancelar} className="botao" primary={true} label="Cancelar" />
  	      <RaisedButton onTouchTap={this.handleEnviar} className="botao" primary={true} label="Enviar" />
  			</Paper>
      </div>
    )
  }
}

export default Form
