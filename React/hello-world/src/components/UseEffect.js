import React, { useState, useEffect } from 'react'

const UseEffectComponent =()=> {
const [count, setCount] = useState(0)

//use effect function runs after every render of the component, replaces the use of componentdidmount, componentdidupdate, willcomponentunmount
useEffect (() => {
    document.title = "you clicked " + count + " times"
}, [])
return (
    <div>
    <button onClick ={() => setCount(count+1) } >click {count} times</button>
    </div>
    )
}

export default UseEffectComponent;
