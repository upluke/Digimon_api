import { Component } from "react";
import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component{
    render(){
        const{filteredDigimon} =this.props

        return (
            <div className="card-list">
            {filteredDigimon.map((monster)=>{
               return( <Card monster={monster} />
            ) 
            
        })}
        </div>
           
        )
    }
}


export default CardList  