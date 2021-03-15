import React, {useState} from 'react';
import './App.css';
import Message from './Message';

function App() {
  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(true)
  
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time = {isMorning ? 'Morning' : "Night"}</h1>

      <Message counter={count} />
      <br />
      <button onClick={
        ()=> setCount(++count)
      }>
        counter update
      </button>
      <button onClick ={()=> setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
