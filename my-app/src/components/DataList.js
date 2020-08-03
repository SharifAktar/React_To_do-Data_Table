import React from 'react'
import Data from './Data'

function DataList (props) {

  let table= props.filteredtable.map((data, i)=>{
    return (
    <Data key={i} name={data.name}  Breed={data.Breed}/>
    
    
    )
    }
    )

  return (
<div>
{table}
</div>

  )
}

      export default  DataList;
  
    