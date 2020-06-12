import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import {SmurfContext} from '../contexts'

import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'

function App() {
  const [data, setData] = useState([])
  const [smurfInput, setSmurfInput]= useState({})
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res)
      })
      ///still add a .catch
  },[])

  
  
  
  
  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfContext.Provider value={{data, smurfInput, }}>
        <SmurfForm /> 
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
  
}

export default App;
