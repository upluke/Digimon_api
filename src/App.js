import { Component } from "react";
import './App.css'
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";


class App extends Component {
  constructor(){
    super()
    this.state={
      digimon:[],
      searchItem:""
    }
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

  onsearchChange=(e)=>{
    this.setState({searchItem: e.target.value.toLocaleLowerCase()})
  }
 
  render(){
    const {digimon, searchItem}= this.state
    const filteredDigimon=digimon.filter((dm)=>{
      return dm.name.toLocaleLowerCase().includes(searchItem)
    })

    return (
      <div className="App">
      <SearchBox className="search-box" placeholder="search monsters..." onchangeHandler={this.onsearchChange} />
      <CardList filteredDigimon={filteredDigimon} />
      </div>
    );
    }
    // https://digimon-api.herokuapp.com/
}

export default App
