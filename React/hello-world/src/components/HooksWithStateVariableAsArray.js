import React, { useState} from 'react'

const StateAsArray =()=> {
    const [items, setItems] = useState([])//giving initial value as empty array

    const addItem =() => {
    //when this funtion is called it adds object elements to an array
    setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <button onClick = {addItem}>Add a number</button>
            <ul>
                {items.map(items => (
                    <li key={items.id}>{items.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default StateAsArray
                
                
        
        
        