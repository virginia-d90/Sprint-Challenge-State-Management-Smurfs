import React, { useContext} from 'react';

import Smurf from './Smurf'
import {SmurfContext} from "../contexts"

const SmurfList = () => {

    const {data} = useContext(SmurfContext)

    console.log('smurfListData',data)
    return(
        <>
            {
                data.map( smurf => (
                    <Smurf key={smurf.id} smurf={smurf}/>
                ))
            }
            
        </>
    )
}

export default SmurfList;