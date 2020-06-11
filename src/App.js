import React, { Component } from 'react';
import CronExp from './CronExp'
import { isValidCron } from 'cron-validator'
import './App.css'


let i = 1;

class App extends Component {
  state = {
    expression : " ",
    error : ''
  }


  componentDidMount = () => {
    let url = window.location.href
    console.log(url)
    let exp = url.match(/[^#]*$/g)[0].split('_').join(" ")
    if(isValidCron(exp)){
      this.setState({
        expression : exp
      })
    }


  }

//Press event 
 handlePress = (e) =>{
   
    
  //   if (e.keyCode == 32){
   
  //  if(i == 5 ){
  //   i = 0;  
  //   document.getElementById('submit').focus();  
  //   }
  //   document.getElementsByClassName('inputs')[i].focus();
  //   console.log( document.getElementsByClassName('inputs'));
  //   i++;
  // }






}








//Click Event
handleClick = () =>{
  console.log("hello boi")
  
  let min = document.getElementById('min').value;
  let hour = document.getElementById('hour').value;
  let dayMonth = document.getElementById('dayMonth').value;
  let month = document.getElementById('month').value;
  let weekDay = document.getElementById('weekDay').value;

  let dumExp =  min+" "+hour+" "+dayMonth+" "+month+" "+weekDay
  

  //Cron validation
  if (isValidCron(dumExp)){
    this.setState({
      expression : dumExp,
      error : ''
    })
    console.log('validate')
  }
  else {

    

    this.setState({
      expression:' ',
      error : 'This is not a valid cron'
    })
  }
}

// Focus event

handleFocus = (e) => {

  e.target.value = ""

}


//change text on focus

handleMin = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li> *   any value</li> <li>,    value list separator</li><li> -      range of values" +
          "</li> <li>/    step values</li> <li> 0-59    allowed value </li> </ul>"
}



handleHour = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li> *   any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 0-23    allowed value </li> </ul>"
}

dayOfMonth = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li>* any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 1-31    allowed value </li> </ul>"
}


handleMon = () => {
  document
      .getElementById("info-cont")
      .innerHTML = " <ul>    <li>* any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 1-12    allowed value </li> </ul>"
}

handleDw = () => {
  document.getElementById("info-cont").innerHTML = " <ul>    <li>* any value</li> <li>,    value list separator</li><li> -    range of values" +
          "</li> <li>/    step values</li> <li> 0-6    allowed value </li> </ul>"
}


  

  
  


  render() {
    if(isValidCron(this.state.expression)){

      let stateObj = {
        id: "100"
    };

      window.history.replaceState(stateObj,'/',"/#"+this.state.expression.split(" ").join("_"));
    }



    

    
    return (
      <div className = "main">

        <div className = "header">
            <h1 className = "heading">CronExpress</h1>
            <p className = "desc">a simple cron generator</p>
        </div>
        

        <div className = "answer">
        <CronExp expValue = {this.state.expression}/>
        <h2>{this.state.error}</h2>
        </div>
        

       
        <div className = "inputMain">

          {/* Table for inputs */}
        
         <table>

           <tr>
            <td ><input className = "inputs" type = 'text' onFocus = {this.handleFocus}  onKeyDown = {this.handlePress} id = "min" defaultValue = '*' onFocus = {this.handleMin}></input></td>
            <td ><input className = "inputs" type = 'text' onFocus = {this.handleFocus} onKeyDown = {this.handlePress} id = "hour" defaultValue = '*' onFocus = {this.handleHour}></input></td>
            <td ><input className = "inputs" type = 'text' onFocus = {this.handleFocus} onKeyDown = {this.handlePress} id = "dayMonth" defaultValue = '*' onFocus = {this.dayOfMonth}></input></td>
            <td> <input className = "inputs" type = 'text' onFocus = {this.handleFocus} onKeyDown= {this.handlePress} id = "month" defaultValue = '*' onFocus = {this.handleMon}></input></td>
            <td ><input className = "inputs" type = 'text' onFocus = {this.handleFocus} onKeyDown = {this.handlePress} id = "weekDay" defaultValue = '*' onFocus = {this.handleDw}></input></td>
          </tr>


          <tr>
            <td><h3>Minute</h3></td>
            <td><h3>Hours</h3></td>
            <td><h3>Day</h3></td>
            <td><h3>Month</h3></td>
            <td> <h3>WeekDay</h3></td>
          </tr>
        </table>
        </div>  
          
          
         <div className = "button"><button id = 'submit' onClick = {this.handleClick}>Submit!</button></div> 
         

         {/* {info content here} */}
        <div id = "info-cont">
          
          <ul>    
            <li>* any value</li> 
            <li>,    value list separator</li>
            <li> -    range of values" + "</li> 
            <li>/    step values</li> 
            <li> 1-31    allowed value </li> 
          </ul>
         
        </div>

        {/* Example table here */}

        <div id = "exampletable">
          <p><h2>Examples</h2></p>
          <table className = "exTable">
            <tr>
              <td>every minute</td>
              <td><a href= "http://localhost:3000/#*_*_*_*_*" target="_blank">* * * * *</a></td>
            </tr>


            <tr>
            <td>every 5 minute</td>
              <td><a href= "http://localhost:3000/#*/5_*_*_*_*" target="_blank">*/5 * * * *</a></td>
            </tr>

            <tr>
              <td>every day</td>
              <td><a href= "http://localhost:3000/#0_0_*_*_*" target="_blank">0 0 * * * </a></td>
            </tr>

            <tr>
              <td>monthly</td>
              <td><a href = "http://localhost:3000/#0_0_1_*_*" target= "_blank">0 0 1 * *</a></td>
            </tr>

            <tr>
              <td>every year</td>
              <td><a href = "http://localhost:3000/#0_0_1_1_*" target= "_blank">0 0 1 1 *</a></td>
            </tr>
            
          </table>
          
         
        </div>
        
      </div>
    );
  }
}

export default App;