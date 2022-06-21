import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return(
            <input
                className={this.props.className} 
                onChange={this.props.onchangeHandler} 
                type="search"
                placeholder={this.props.placeholder} 
            />
        )
    }
}

export default SearchBox