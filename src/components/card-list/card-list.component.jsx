import { Component } from "react";


class CardList extends Component{
    render(){
        
        return (
            <div>        
                <ul>
                    {this.props.filteredDigimon.map((monster)=>{
                    return (
                        <div key={monster.name}>
                            <h1 >{monster.name}</h1>
                            <img src={monster.img} />
                        </div>
                    ) 
                })}
             </ul>
          </div>
        )
    }
}


export default CardList