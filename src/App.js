import React, { Component } from 'react' ;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teste : 'Hello World!'

    }
  }

  render() {
    return(
      <div>
        <img src={require('./assects/biscoito.png') } alt='' ></img>

        {/* Atribuindo conteúdo do component secundário */}
        <CompTest titulo='Hello World !'  />
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



export default App ;