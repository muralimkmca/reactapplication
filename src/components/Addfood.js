import { Component } from "react";
import axios from 'axios';
import { variables } from "../Variables";

export class Addfood extends Component{

    constructor(props) {
      super(props)
    
      this.state = {        
        foodName:'',
        foodDesc:''
      }
    }

    handleChange=(e) =>{        
        this.setState({
            [e.target.id]:e.target.value,            
        })
    }

    handleSubmit=(e) =>{      
        e.preventDefault();  
              
        axios({
            method:'post',
            url:variables.API_URL,
            data:{
                foodName:this.state.foodName,
                foodDesc:this.state.foodDesc
            }
        })
    }


    render(){        
        return(            
            <div><h3>Add Food Page</h3><br />
                <form onSubmit={this.handleSubmit}>
                    <label>Food Name</label><br />
                    <input type='text' id='foodName' name='foodName' value={this.state.foodName} onChange={this.handleChange} ></input><br />
                    <label>Food Description</label><br />
                    <input type='text' id='foodDesc' name='foodDesc' value={this.state.foodDesc} onChange={this.handleChange} ></input><br /><br/>
                    <button type='submit'>Save</button>
                </form>    
            </div>
        )
    }
}

export default Addfood