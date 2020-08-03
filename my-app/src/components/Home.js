import React,{Component} from 'react'
import Navbarmenu from '../components/Navbarmenu';
import Video from '../components/Video'
import Column from '../components/Column'
import Grid from '../components/Grid'
import Card from '../components/cardUI'

import Counter from '../components/Counter'
import Footer from '../components/Footer'


 class Home extends Component {
    render() {
      return (
        <div>
         <Navbarmenu/>
         <br/>
      <br/>
      <br/>
          <Video/>
      <Column/>
      <br/>
      <br/>
      <br/>
     <Counter/> 
      <br/>
      <br/>
      <br/>
      <Grid name="Office room" heroName="For daily work">
        <p> My office is very nice  </p>

      </Grid>
      <Card name="House" heroName=" I live here">
      <p> I like my house</p>
        </Card>   
       
       
     
     

      
      <Footer/>
     
        </div>
      );
    }
  }
  export default Home;