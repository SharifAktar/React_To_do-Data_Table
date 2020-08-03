import React,{Component} from 'react'
import Navbarmenu from '../components/Navbarmenu';
import Footer from '../components/Footer'



class  DataTable extends Component {

     
    render() {
      const myFunction=() =>{
  
        let input = document.getElementById("search");
        let filter = input.value.toUpperCase();
        let table = document.getElementById("myTable");
        let tr = table.getElementsByTagName("tr");
         
         for (var i = 0; i < tr.length; i++) {
           
          let td = tr[i].getElementsByTagName("td")[0];
           
           if (td) {
             
          let  txtValue = td.textContent || td.innerText;
             
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
               tr[i].style.display = "";
               console.log(filter);
             } 
             else {
               tr[i].style.display = "none";
             }
           }       
         }
       }
     
       const showMore=() =>{
        var shownDefault = 5;
        var numShown = shownDefault; // Initial rows shown & index
        var table = table.btn.find('tbody');
        // var table = ('.btn').find('tbody');  // tbody containing all the rows
        var numRows = table.find('tr').length; // Total # rows
        
        var moretext = "Show more";
        var lesstext = "Show less";
        
        (document). ready(function (){
            table.find('tr:gt(' + (numShown - 1) + ')').hide()                      
            ('#btn').click(function() {
                if (numShown === numRows) {
                  // since we show all rows node, hiding some
                  numShown = shownDefault;
                  table.find('tr:gt(' + (numShown - 1) + ')').hide()
                  ('#btn').text(moretext)                              
                } else {
                  numShown = numRows;
                  ('#btn').text(lesstext)                    
                }        
                table.find('tr:lt(' + numShown + ')').show();
            });        
        });
        
        }

         const exportTableToExcel =(myTable,filename ="")=>{
           var downloadLink;
           var dataType='application/vnd.ms-excel';
           var tableSelect=document.getElementById("myTable");
           var tableHTML=tableSelect.outerHTML.replace(/ /g,'%20');
         
         
           filename=filename?filename+'.xls':'export_excel_data.xls';
           downloadLink=document.createElement("a");
         
           document.body.appendChild(downloadLink);
         
         if(navigator.msSaveOrOpenBlob){
           var blob = new Blob (['\ufeff',tableHTML], {
             type:dataType
           });
           navigator.msSaveOrOpenBlob(blob,filename);
         }
         
         else {
           downloadLink.href='data:'+ dataType+','+tableHTML;
           downloadLink.download=filename;
           downloadLink.click();
         }
         }
        return (
          <div> 
          <Navbarmenu/>
       
         
          <br/> 
        <br/>
            <div className="container alert alert-light">
            <div className="row">
                <div className="col-12 card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-12">
                      <div className="card-body">
                        <div className="card-text">
                            <h3><b>Display Data</b></h3>
                            <input type="text" id="search"  onKeyUp={myFunction} placeholder="search for names .." />
        <br/> 
        <br/>
        <p>
        <table id="myTable" className="table table-sm" >
   
<thead>
  <tr className="table-warning">
    <th scope="col">Company</th>
    <th scope="col">Contact</th>
    <th scope="col">Country</th>
  </tr>
   </thead>
  <tbody>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
 
  <tr>
 
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
 <tr> 
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    </tr>
    
  <tr>
    <td>Comfort Homes Ltd</td>
    <td>Giovanni Rovelli</td>
    <td>Spain</td>
  </tr>

<tr>
    <td>Kemico Pharma</td>
    <td>Giovanni Rovelli</td>
    <td>Argentina</td>
  </tr>

<tr>
    <td>The Delta Group of Industries Ltd</td>
    <td>Giasuddin </td>
    <td>Bangladesh</td>
  </tr>
<tr>
    <td>Epyllion Group</td>
    <td>Mahabubul Alom Shohag</td>
    <td>Bangladesh</td>
  </tr>

<tr>
    <td>Grevin prague s r o</td>
    <td>Giovanni Rovelli</td>
    <td>Prague</td>
  </tr>

<tr>
    <td>DHL IT Services</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>IBM</td>
    <td>Jhon</td>
    <td>Denmark</td>
  </tr>
    <tr>
    <td>DXC technology</td>
    <td>Giovanni Rovelli</td>
    <td>Seweden</td>
  </tr>
    <tr>
    <td>SAP Ariba</td>
    <td>Giovanni Rovelli</td>
    <td>Berlin</td>
  </tr>
   </tbody>
   
   </table>

          
           </p>
           <tr>
           <td colSpan={5}>
         
          <button id="btn"  type="button"style={{width: 140}} onClick={showMore}> <i className="fa fa-spinner fa-pulse" style={{display:'none'}}></i>Show more</button>
<br/>
<br/>
<br/>
          <button id="btn"  type= "button"style={{width: 140}} onClick={exportTableToExcel}  ><i className="myTable" ></i> Export data to Excel</button>
        </td>
        </tr>
                  
    </div>
    </div>
    </div>
    </div>
    </div>
   </div>
   </div>

    <Footer/>
    </div>
   
      ) }

}
export default DataTable;
