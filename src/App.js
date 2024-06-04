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
  let estados = this.state;//Centralizo as state

  let geraNum = Math.floor(Math.random() * this.frases.length );//Números aleatórios na quantidade do array de frases.

  estados.frase = this.frases[geraNum];//state de frase recebe uma frase na posicão do número gerado

  this.setState(estados)//atualizo a state que esta atribuida hà variável estados.
  //Aqui todas as states são atualizada,porém, somente uma teve alteração.

}

  /* Renderização do componente principal */
  render() {
    return(
      <div>
        <h1>BISCOITO DA SORTE...</h1>
        <img src={require('./assects/biscoito.png')} alt=''/>
        <Botao nome='Quebrar Biscoito' acaoBtn={this.geraFrase} resultado={this.state.frase} />
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.acaoBtn} > 
        {this.props.nome} </button>
        <h3> {this.props.resultado} </h3> 
      </div>
    )
  }
}

export default App ;