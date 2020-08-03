import React from 'react';
import './App.css';
import './style.css';
import {BrowserRouter as  Router,Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Fetchdata from "./components/Fetchdata"
import DataTable from "./components/DataTable";



const App = () => (
  <div className="App">
  <Router>
  <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/about"  component={About}/> 
        <Route path="/contact"  component={Contact}/>
        <Route path="/fetchdata"  component={Fetchdata}/> 
        <Route path="/DataTable"  component={DataTable}/> 
      </Switch>
      </Router>
    </div>

);

export default App;
