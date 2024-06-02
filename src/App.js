
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
    /* 1- Criamos uma let para obter os state */
    let states = this.state;
    /* 2- Criamos uma let para obter os números aleatórios */
    /* 3- Usamos o metodo Math.random, para criar um número aleatório, a cada ação do button */
    let randomNumber = Math.floor(Math.random() * 1000 );
    /* Usamos o let state criada,com a adição da state presente no constructor para obter o valor */
    states.numeroAleatorio = randomNumber;
    /* Atualizo a state com o metodo setState(states) */
    this.setState(states);    
  }

  render() {
    return(
      <div>
        <img src={require('./assects/biscoito.png') } alt='' ></img>

        {/* Atribuindo conteúdo do component secundário */}
        <CompTest titulo='Hello World !'  />
        <RandonNumber  acaoBotao={this.valor} buttonName='Números Aleatórios'  />
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
        
        <button onClick={this.props.acaoBotao} >{this.props.buttonName}</button>
        <label> <h3> {this.numeroAleatorio} </h3> </label>
          
      </div>
    )
  }
}



export default App ;