
import './App.css';
import { useState } from 'react';
import  './callNumber.js';
import { CallNum,  } from './callNumber.js';




function App() {

let [ Number, setNumber]=useState(0)
let [isMorning, SetTheme ] = useState(true)

  return (
    <div align='center' className= {isMorning ? 'Light' : 'Dark'}>
 
      <h1>
        Simple Counter App
      </h1>

<br />
       
      
      <h2 >
      
        Good
        { isMorning ? ' Morning' : ' Evening' } </h2>
        
        
         <h3>
       <CallNum counter={Number} />
         </h3>

      

     
     
     
       <button onClick= {
         ()=>SetTheme(!isMorning)}>

           Change Theme {isMorning ? 'To Dark' : 'To Light'}


       </button>

      

     <br />


      

     <button onClick={
       ()=>setNumber(Number - 1)
     }>
       Decrease
     </button>


     <button onClick={
        ()=>setNumber(Number + 1)
      }>
        Increase
      </button>





    </div>
  );
}

export default App;
