
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

    let valores = this.state;
    
    /* 1- Criamos uma let para obter os números aleatórios */
    /* 2- Usamos o metodo Math.floot e Math.random, para criar um número aleatório inteito, a cada ação do button */
    let randomNumber = Math.floor(Math.random() * 1000 );
   valores.numeroAleatorio = randomNumber;
    this.setState({valores})       
  }

  render() {
    return(
      <div>
        <img src={require('./assects/biscoito.png') } alt='' ></img>

        {/* Atribuindo conteúdo do component secundário */}
        <CompTest titulo='Hello World !'  />
        <RandonNumber  acaoBotao={this.valor} buttonName='Gerar números'  />
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

        <div>
          <h3> {this.props.acaoBotao} </h3>
        </div>    
          
      </div>
    )
  }
}



export default App ;