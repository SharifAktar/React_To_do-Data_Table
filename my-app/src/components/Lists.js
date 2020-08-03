import React, { Component } from 'react';
import Items from "../components/Items";



export default class Lists extends Component {
    render() {

        const { items, clearList, handleDelete,handleEdit} =this.props;
        return (
           <ul className="list-group my-5"> 
           <h3 className="text-caitalize text-center"> List of items </h3>
           {items.map(item => {return ( 
            <Items key ={item.id} title ={item.title}
               handleDelete={()=>handleDelete(item.id)} 
               handleEdit={()=> handleEdit(item.id)}
               />
           )

           })}
      <button type="button"  className="btn btn-danger btn-blok text-capitalize mt-5"   
           onClick ={clearList} >Clear List </button>
           
           </ul>
        )
    }
}
