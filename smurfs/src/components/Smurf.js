import React from 'react'

const Smurf = ({smurf}) => {
    console.log(smurf)
    return(
        <div className='smurf'>
            <h4>{smurf.name}</h4>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>

        </div>

    )
}
export default Smurf