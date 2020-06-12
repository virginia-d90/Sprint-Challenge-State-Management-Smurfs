import React, {useState, useContext} from 'react'

import {SmurfContext} from '../contexts'
import axios from 'axios'

import EditForm from './EditForm'

const Smurf = ({smurf}) => {
   const [editSmurf, setEditSmurf] = useState({
       name: smurf.name,
       age: smurf.age,
       height: smurf.height
   })
   const [editToggle, setEditToggle] = useState(false)

   const {refresh, setRefresh} = useContext(SmurfContext)

   const formEdit = (e) => {
       setEditSmurf({
           ...editSmurf,
           [e.target.name]: e.target.value
       })
   }

   const putSmurf = (e) =>{
       e.preventDefault();
       axios.put(`http://localhost:3333/smurfs/${smurf.id}`, editSmurf)
        .then(res => {
            console.log('put res', res)

        })
        .catch(err=>{
            console.log('put err', err)
        })
        .finally(()=>{
            setRefresh(!refresh)
            setEditToggle(false)
        })
   }

    return(
        <div className='smurf-container'>
            {
                editToggle ? (
                    <>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            setEditToggle(false)
                        }}>
                            Don't Edit Smurf
                        </button>
                        <EditForm 
                        putSmurf = {putSmurf} 
                        formEdit={formEdit} 
                        editSmurf={editSmurf}   
                        />
                    </>
                ):(
                    <button onClick={(e) =>{
                        e.preventDefault()
                        setEditToggle(true)
                    }}>
                        Edit Smurf
                    </button>
                )
            }

            <div className='smurf'>
                <h4>{smurf.name}</h4>
                <p>Age:{smurf.age}</p>
                <p>Height:{smurf.height}</p>

            </div>
        </div>

    )
}
export default Smurf