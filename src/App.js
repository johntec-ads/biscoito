
import React, { Component } from 'react' ;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teste : 'Hello World!',
      numeroAleatorio: '1',

    }

    this.valor = this.valor.bind(this);
  }

  valor () {
    let state = this.state;

    let numeroAleatorio = Math.floor(Math.random());


    
  }

  render() {
    return(
      <div>
        <img src={require('./assects/biscoito.png') } alt='' ></img>

        {/* Atribuindo conteúdo do component secundário */}
        <CompTest titulo='Hello World !'  />
        <RandonNumber  numeros={this.valor} nome='Números Aleatórios'  />
      </div>
    )
  }
}

class CompTest extends Component {
  render() {
    return(
      <div>
        {/* Cria-se a props no component secundário
        e atribui conteúdo pelo component primário */}
        <h2>
        { this.props.titulo }
        </h2>

      </div>
    )
  }
}

class RandonNumber extends Component {
  render() {
    return(
      <div>
        {this.props.numeros}
        <button > {this.props.nome} </button>
        <label> {this.props.valores} </label>
      </div>
    )
  }
}



export default App ;