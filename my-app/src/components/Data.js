import React from 'react';

function  Data (props) {
    return (
        <div style={{width:200, border: 'solid'}}>
         <p> Name:{props.name}   </p>   
         <p> Breed:{props.Breed}   </p>   
        </div>
    );
}

export default Data;
