import { Component } from "react";
import axios from 'axios';
import { variables } from "../Variables";

export class Listfood extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         foods:[],
         id:"",
         foodName:"",
         foodDesc:""
      }
    }

    componentDidMount(){
        axios.get(variables.API_URL)
        .then(response => { this.setState({foods:response.data})
        }).catch(error => { console.log(error)})

    }

    render(){
        const{
            foods
        }=this.state;

        return(
            <div>List Food Page
            <table className="table-table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Food Name</th>
                        <th>Food Desc</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(f =>
                        <tr key = {f.id}>
                            <td>{f.id}</td>
                            <td>{f.foodName}</td>
                            <td>{f.foodDesc}</td>
                        </tr>
                        )}
                </tbody>
            </table>
            </div>
        )
    }
}
