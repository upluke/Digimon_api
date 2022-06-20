import { Component } from "react";


class CardList extends Component{
    render(){
        const{filteredDigimon} =this.props
        return (
            <div>        
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
        )
    }
}


export default CardList