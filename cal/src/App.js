import React,{useState} from "react";
import './App.css';

function App() {

  const[input,setInput]=useState('');
  const[result,setResult]=useState('');

  const clear=()=>{
    setInput('');
    setResult(null);

  }

  const answer=()=>{
    setResult(eval(input));
    if(input==false){
      setResult("Error")
    }
  }


  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly/>
      <div className="dis">{result}</div>
      <div>
        <div>
        <button onClick={(e)=>setInput(input+e.target.value)} value="7">7</button>
        <button onClick={(e)=>setInput(input+e.target.value)} value="8">8</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="9">9</button>
        <button onClick={(e)=>setInput(input+e.target.value)} value="+">+</button>
        </div>

        <div>
        <button onClick={(e)=>setInput(input+e.target.value)} value="4">4</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="5">5</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="6">6</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="-">-</button>
        </div>

        <div>
        <button onClick={(e)=>setInput(input+e.target.value)} value="1">1</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="2">2</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="3">3</button> 
        <button onClick={(e)=>setInput(input+e.target.value)} value="*">*</button> 
        </div>

        <div>
        <button onClick={()=>clear()} value="C">C</button>
        <button onClick={(e)=>setInput(input+e.target.value)} value="0">0</button>
        <button onClick={()=>answer()} value="=">=</button>
        <button onClick={(e)=>setInput(input+e.target.value)} value="/">/</button>
        </div>
      </div>
     
    </div>
  );
}

export default App;








