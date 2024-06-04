import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: '',
    }

    
    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
 'Deixe de lado as preocupações e seja feliz.',
 'Realize o óbvio, pense no improvável e conquiste o impossível.',
 'Acredite em milagres, mas não dependa deles.',
 'A maior barreira para o sucesso é o medo do fracasso.'];
    
 this.geraFrase = this.geraFrase.bind(this);
}

geraFrase() {
  let aleatorio = Math.floor(Math)


}

  /* Renderização do componente principal */
  render() {
    return(
      <div>
        <h1>BISCOITO DA SORTE...</h1>
        <img src={require('./assects/biscoito.png')} alt=''/>
        <Botao nome='Quebrar Biscoito' acaoBtn={this.geraFrase} />
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.acaoBtn} > {this.props.nome} </button>
      </div>
    )
  }
}

export default App ;