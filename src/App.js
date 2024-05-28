
import React, { Component } from 'react';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {      
      frases : ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.']
     }

      
     this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
    }

  quebrarBiscoito() {
    alert('Botão funcionou !!!')
  }

  render () {
    return (
      <div>
        <img src={ require( './assects/biscoito.png' ) } alt='' />
        <Botao />
        <h3> Frase número 1 aleatória... </h3>
      </div>

    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.quebrarBiscoito} >Abrir biscoito</button>   
      </div>
    )
  }
}


export default App;