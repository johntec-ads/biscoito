import React , { Component } from  'react' ;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div>
        <img src={require('./assects/biscoito.png')}  alt=''></img> 
        <Botao/>       
      </div>
    )   
    
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button>Abrir biscoito</button>
      </div>

    )
  }
}



export default App ;