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
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  const handleFormChange = e => {
    setSmurfInput({
      ...smurfInput,
      [e.target.name]: e.target.value
    })
  }

  const postSmurf = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3333/smurfs", smurfInput)
      .then(addedSmurf => {
        console.log(addedSmurf)
      })
      .catch(err => {
        console.log('Post error', err)
      })
      .finally(() => {
        setSmurfInput({
          name: '',
          age: '',
          height: '',
        })
      })
  }


  
  
  
  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <SmurfContext.Provider value={{data, smurfInput, handleFormChange, postSmurf }}>
        <SmurfForm /> 
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
  
}

export default App;
