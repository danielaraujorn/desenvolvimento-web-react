import React from 'react'

class Avatar extends React.Component {
  render() {
    let usuario = this.props.usuario
    return (
      <div>
        <img className="img-circle" src={usuario.foto} width={60} alt="avatar" />
        <div>{usuario.nome + ' ' + usuario.sobrenome}</div>
      </div>
    )
  }
}

export default Avatar
