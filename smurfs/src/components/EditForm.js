import React from 'react'

const EditForm = ({putSmurf, formEdit, editSmurf}) => {

    return(
        <>
            <form onSubmit={(e)=>putSmurf(e)}>
                <label>Smurf Name</label>
                <input 
                    name='name'
                    value={editSmurf.name}
                    onChange={(e) => formEdit(e)}
                />
                <label>Smurf Age</label>
                <input 
                    name='age'
                    value={editSmurf.age}
                    onChange={(e) => formEdit(e)}
                />
                <label>Smurf Height</label>
                <input 
                    name='height'
                    value={editSmurf.height}
                    onChange={(e) => formEdit(e)}
                />
        
                <button type="submit">Click to update Smurf</button>
            </form>
        </>

    )


}
export default EditForm