
import React, { Component } from 'react';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      textoFrase : ''
     }

   this.frases = [ 'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.' ]

    this.quebrarBiscoito = this.quebrarBiscoito.bind( this )

  }

  quebrarBiscoito () {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state)
  }

  render () {
    return (/* Component principal */
      <div>
        {/* elemento src com atribuição de require */}
        <img src={ require( './assects/biscoito.png' ) } alt='' />
        <Botao nome='abrirBiscoito' acaoBtn={ this.quebrarBiscoito } />
        <h3> {this.state.textoFrase} </h3>

      </div>

    )
  }
}

/* Component Botao */
class Botao extends Component {
  render () {
    return (
      <div>
        {/* elemento button , atribuir onClick */}
        <button onClick={ this.props.acaoBtn }> { this.props.nome } </button>

      </div>
    )
  }
}


export default App;