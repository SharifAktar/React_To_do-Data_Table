import React from 'react'


const Grid= props => {
      return (
        
        <div className="container">
        <div className="row">
          <div className="column" text align="justify">
          <h2> Design {props.name} .{props.heroName}</h2>
          {props.children}
        
          <img className="img-rounded card-img-top" style={{ maxWidth: 220,maxHeight: 200, marginLeft: 0  }}  src="images/office.png" />
          <p>A standard office environment contains furniture and equipment needed to conduct common business activities. These items include desks, chairs, cubicle walls, phone systems and cords, fax machines, copiers, conference room tables, computer systems and file cabinets.
          </p>
          </div>


          <div className="column" text align="justify">
        <h2>Design</h2>
        <img  className="img-rounded card-img-top" alt="Cinque Terre" style={{ maxWidth: 220,maxHeight: 200, marginLeft: 0 }}   src="images/house.png"/>
        <p> Technology is the sum of techniques, skills, methods, and processes
           used in the production of goods or services or in the accomplishment of 
           objectives, such as scientific investigation.</p>
	     
        </div>
          </div>
       </div>
        
      
        
      )
    }
 

export default Grid;




