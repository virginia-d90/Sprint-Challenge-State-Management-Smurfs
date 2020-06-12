import React, { useContext} from 'react';

import Smurf from './Smurf'
import {SmurfContext} from "../contexts"

const SmurfList = () => {
    return(
        <>
            <h2>List of Smurfs</h2>
            <Smurf />
        </>
    )
}

export default SmurfList;