import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react' ;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teste : 'Hello World!',
      numeroAleatorio: '1',

    }

    this.numeros = this.numeros.bind(this);
  }

  numeros () {
    
  }

  render() {
    return(
      <div>
        <img src={require('./assects/biscoito.png') } alt='' ></img>

        {/* Atribuindo conteúdo do component secundário */}
        <CompTest titulo='Hello World !'  />
        <RandonNumber valor={this.numeros} />
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
        { this.props.titulo } 

      </div>
    )
  }
}

class RandonNumber extends Component {
  render() {
    return(
      <div>
        {this.props.numeros}
      </div>
    )
  }
}



export default App ;