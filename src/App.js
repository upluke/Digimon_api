import { Component } from "react";

class App extends Component {
  constructor(){
    console.log("1")
    super()
    this.state={
      digimon:[],
      searchItem:""
    }
  }

  componentDidMount(){
    console.log("2")
    fetch('https://digimon-api.vercel.app/api/digimon/?_limit=10')
    .then((response)=>response.json())
    .then((data)=>{
      data=data.slice(0, 10)
      this.setState({digimon:data}) 
    })
    // .then((data)=> this.setState({digimon:data}))
  }
 
  render(){
    console.log('3')
    const filteredDigimon=this.state.digimon.filter((dm)=>{
      return dm.name.toLocaleLowerCase().includes(this.state.searchItem)
    })

    return (
      <div className="App">
        <input 
          onChange={(e)=>{
            this.setState({searchItem: e.target.value.toLocaleLowerCase()})
          }} 
          placeholder="Search your digitmon..." />
        <ul>
          {filteredDigimon.map((monster)=>{
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
