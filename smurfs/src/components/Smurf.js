import React, {useState} from 'react'

import {EditContext} from '../contexts'

const Smurf = ({smurf}) => {
   const [editSmurf, setEditSmurf] = useState({
       name: smurf.name,
       age: smurf.age,
       height: smurf.height
   })

   const [editToggle, setEditToggle] = useState()

    return(
        <div className='smurf-container'>
            {
                editToggle ? (
                    <button>Don't Edit Smurf</button>
                ):(

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