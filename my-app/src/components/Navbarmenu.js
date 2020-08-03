import React, { Component } from 'react'

class Navbarmenu extends Component {
    render() {
        return (
            <div className= "fixed-top">
              <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
              <nav className="navbar navbar-light bg-light">
 
    <img src="images/logo1.png"  width="30" height="30" className="d-inline-block align-top" alt=""/>
</nav>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link " href="/about">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle show" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Project
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/fetchdata" target="_blank">Fetchdata</a>
          <a className="dropdown-item" href="/dataTable" target="_blank">Data Table</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/calculator">Calculator</a>
        </div>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      
            </div>
        )
    }
}

export default Navbarmenu;
