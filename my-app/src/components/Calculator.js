
import React from 'react'
import Navbarmenu from './Navbarmenu';
import Footer from './Footer';

function Calculator () {
    const userInput =document.getElementById('input-number');
    const addBtn=document.getElementById('btn-add');
    const subtractionBtn= document.getElementById('btn-subtract');
    const multiplyBtn=document.getElementById('btn-multiply');
    const divideBtn =document.getElementById('btn-divide');
    
    const currentResult= document.getElementById('result')
    const calculation =document.getElementById("calculation") 
    
   
 
return (
<div>
<Navbarmenu/>
<section id="calculator">
<input type="number" id="input-number"/>
<br/>
<br/>
<div id="calc-actions">
<button type="button" id="btn-add">+</button>
<button type="button" id="btn-subtract">-</button>
<button type="button" id="btn-multiply">*</button>
<button type="button" id="btn-divide">/</button>
</div>
</section>
<section id="results">
    <h2 id="calculation">0</h2>
    <h2>Result:<span id="result">0</span></h2>
</section>
<Footer/>
</div>
)

}

   

    
    
export default Calculator;





 