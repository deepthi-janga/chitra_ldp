import React, { useState} from 'react'

const StateAsObject =()=> {
    const [name, setName] = useState({firstName : '', lastName:''})
    return (
        <form>
            <input //input field 1 
            type='text'
            value={name.firstName}
            //adding a onChange event along with spread function of ES6 so that previously added input doesn't goes away
            onChange = {e => setName({ ...name,firstName: e.target.value})}
            />

            <input //input field 2
            type='text'
            value={name.lastName}
            //adding a onChange event along with spread function of ES6
            onChange = {e => setName({ ...name, lastName: e.target.value})}
            />
            
            <h2>FirstName entered in input 1 is {name.firstName}</h2>
            <h2>LastName entered in input 2 is {name.lastName}</h2>
        </form>
    )
    }

    export default StateAsObject
