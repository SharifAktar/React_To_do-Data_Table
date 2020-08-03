import React, { Component,  } from 'react'
import Navbarmenu from '../components/Navbarmenu';
import Footer from '../components/Footer'

const look = { 
    allowfullscreen:" ",
    ariahidden:false,
     tabindex:0
 
}


 class Contact extends Component {
    render() {

   return (
            <div>
                 <Navbarmenu/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <form>
  <div className="container">
  <div className="col">
    <div className="form-group col-md-6">

    <div className="form-row">
    <label for="inputFirstName">First Name</label>
      <input type="text" className="form-control" placeholder="First name"/>
    </div>

    <div className="form-row">
      <label for="inputLastName">Last Name</label>
      <input type="text" className="form-control" placeholder="Last name"/>
    </div>
    
    <div className="form-row">
    <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" placeholder="Type your email id"/>
    </div>
  
  

  <div className="form-row">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Type your Address"/>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>

    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>

    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>

  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
   
  </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  </div>
  </div>
  
</form>
              <h4> Contact {this.props.name} Address {this.props.heroname}    </h4> 
               <p>Address: Rochovská 9, Praha 14-Hloubětín </p> 

              <div className="double-space"></div>
                <div className="map">
                <iframe style ={look}  width="600" height="450" frameborder="0" 
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.97423211355!2d14.545887015718938!3d50.10548927942924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bed309664870f%3A0x9e7ceae5bb141eba!2sRochovsk%C3%A1%209%2C%20198%2000%20Praha%2014!5e0!3m2!1sen!2scz!4v1589584730664!5m2!1sen!2scz" ></iframe>
                </div>
                <br/>
                 <br/>
                <Footer/>
            </div>
            
        )
    }
}

export default Contact

