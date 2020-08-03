import React  from 'react'


function Footer(props) {
   let className = props.closing ? 'closing' : ''
        return (
      <div>    
    <footer className ={className}> 
        
     <h5 ><b>Contact </b></h5> 
    <p>© S M . 2020. All rights reserved.Website made by 
    <a href="https://www.linkedin.com/in/sharif-aktaruzzaman-63297932/" target="_blank"> @Sharif Aktaruzzaman</a></p>
    
     </footer>
     </div>       
        
        )
    
}

export default Footer
