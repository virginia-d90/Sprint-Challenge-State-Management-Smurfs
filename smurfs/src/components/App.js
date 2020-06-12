import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [smurfInput, setSmurfInput]= useState({})
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res)
      })
  },[])
  
  
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
  
}

export default App;
