import React, { useContext} from 'react';

import {SmurfContext} from '../contexts'

const SmurfForm = () => {
    return (
        <>
            <h2>Add a Smurf</h2>
            <form>
                <label>Smurf Name</label>
                <input 
                    name='name'
                    // value={smurfInput.name}
                    // onChange={(e) => formChange(e)}
                />

                <button type="submit">Click to add Smurf</button>
            </form>
        
        
        </>
    )
}
export default SmurfForm