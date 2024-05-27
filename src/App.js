import React , { Component } from  'react' ;
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.frases = [
      'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
 'O riso é a menor distância entre duas pessoas.', 
 'Deixe de lado as preocupações e seja feliz.',
 'Realize o óbvio, pense no improvável e conquiste o impossível.',
 'Acredite em milagres, mas não dependa deles.',
 'A maior barreira para o sucesso é o medo do fracasso.'
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

  }

  quebraBiscoito() {
    alert('Click Ok !')

  }


  render() {
    return(
      <div className='container' >
        <img src={require('./assects/biscoito.png')} className='img'  alt=''></img> 
        
        <Botao nome='Abrir biscoito' acaoBtn={this.quebraBiscoito} />

        <h3 className='textoFrase' > Frase número 1 aleatória... </h3>
      </div>
    )   
    
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button onClick={ this.props.acaoBtn } > {this.props.nome} </button>       
      </div>

    )
  }
}



export default App ;