import React, { useContext} from 'react';

import {SmurfContext} from '../contexts'

const SmurfForm = () => {

    const { data, smurfInput, handleFormChange, postSmurf} = useContext(SmurfContext)

    return (
        <>
            <h2>Add a Smurf</h2>
            <form onSubmit={(e)=>postSmurf(e)}>
                <label>Smurf Name</label>
                <input 
                    name='name'
                    value={smurfInput.name}
                    onChange={(e) => handleFormChange(e)}
                />
                <label>Smurf Age</label>
                <input 
                    name='age'
                    value={smurfInput.age}
                    onChange={(e) => handleFormChange(e)}
                />
                <label>Smurf Height</label>
                <input 
                    name='height'
                    value={smurfInput.height}
                    onChange={(e) => handleFormChange(e)}
                />
           


                <button type="submit">Click to add Smurf</button>
            </form>
        
        
        </>
    )
}
export default SmurfForm