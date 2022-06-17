import { Component } from "react";

class App extends Component {
  constructor(){
    super()
    this.state={digimon:[]}
  }

  componentDidMount(){
    fetch('https://digimon-api.vercel.app/api/digimon/?_limit=10')
    .then((response)=>response.json())
    .then((data)=>{
      data=data.slice(0, 10)
      this.setState({digimon:data}) 
    })
    // .then((data)=> this.setState({digimon:data}))
  }

  render(){
    return (
      <div className="App">
        <ul>
          {this.state.digimon.map((monster)=>{
            return (
              <div key={monster.name}>
                  <h1 >{monster.name}</h1>
                  <img src={monster.img} />
              </div>
            ) 
        })}
        </ul>
      </div>
    );
    }
    // https://digimon-api.herokuapp.com/
}

export default App
