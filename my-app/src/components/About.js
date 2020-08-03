import React from 'react'

import Navbarmenu from "./Navbarmenu";
import Footer from '../components/Footer'

function About() {
    return (
        <div>
            <Navbarmenu/>
            <br/>
            <br/>
            <br/>
            <div className="jumbotron">
  <div className="container">

    <h3 id="title">About the Auther</h3>
    <h5> S M Aktaruzzaman</h5>
    <p className="txt-align">
      Hi, let me intruduce my-self. As seen the above you already knew my name. My originality from Bangladesh.....................
    </p>

    <h3 id="title">Purpose of this project</h3>
    <p className="txt-align">
      Simple understandable and easy to use even copy paste the code from this project. No need to surff the pages to pages 
      for the code to use in the project. It's tested codes where the individual <b>JS</b> apps can be seen from the list of dropdown
      menu.
    </p>

    <h3 id="title">Description of JS</h3>
    <p className="txt-align">
      JavaScript is the key of front end desiging. JavaScript, often abbreviated as JS, is a programming language that conforms 
      to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket 
      syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
    </p>
  </div>
</div>
            <Footer/>
        </div>
    )
}

export default About