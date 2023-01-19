import './App.css';
import React ,{useState}from 'react'
import Welcome from './Welcome';
function App() {
const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     {
       print?
       <Welcome name={data}/>
       :null
     }
     
    <input type="text" id="form" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Sign In</button>
    
    </div>
  );
}

export default App;