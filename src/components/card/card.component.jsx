import { Component } from "react";
import './card.styles.css'

class Card extends Component{
    render(){
        const {name, img} =this.props.monster

        return (
            <div>        
           
             
                    <div className="card-container" key={name}>
                        <h1 >{name}</h1>
                        <img src={img} />
                    </div>
                
          
       
      </div>
        )
    }
}

export default Card