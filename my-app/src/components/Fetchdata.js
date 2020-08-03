import React, { Component } from 'react'
import Input from "../components/Input";
import Lists from "../components/Lists";
import uuid from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarmenu from '../components/Navbarmenu';
import Footer from '../components/Footer'


class Fetchdata extends Component {
    state ={
        items: [],
        id: 0,
        item: '',
        editItem: false
    };
    handleChange=(e) =>{
        this.setState ({
        item: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault ();
     
        const newItem ={
            id:this.state.id,
            item:this.state.item,
           title:this.state.item
        };
        const updatedItems = [...this.state.items, newItem];
    
        this.setState({
            items: updatedItems,
            item: " ",
            id: uuid(),
            editItem:false
            
            })
    };

            cLearList=()=>{
                this.setState({
                    items:[]
                })
            };
            handleDelete =(id)=>{
              const  filteredItems= this.state.items.filter(item => item.id !== id);
                this.setState ({
                    items:filteredItems
                });
            };
        
            handleEdit = id=> {
                const filteredItems= this.state.items.filter( item=> item.id !== id);

                const selectedItem= this.state.items.find(item=> item.id === id) 
            
            this.setState ({
                items: filteredItems,
                item: selectedItem.title,
                editItem: true,
                id:id,
            
            });
    };

  
    render() {
        return (
            <div> 
                <Navbarmenu/>
               
            <div  className="container" >
                 
            <div className="row"> 
            <div className="col-10 mx-auto col-md-8 mt-4"> 
            <h3 className="text-capitalize text-center"> Input data </h3>
            
            <Input 
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit ={this.handleSubmit}
            editItem={this.state.editItem} />
           
            <Lists 
            items ={this.state.items}
            clearList={this.cLearList} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
/>

               </div>
               </div>
             
            </div>
            <br/>
            <br/>
            <br/>
            <Footer/>
            </div>
        )
    }
}

export default Fetchdata;


