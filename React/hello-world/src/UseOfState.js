import React , {useState} from 'react'//import hook state function

const Application =()=> {
    const [data,setData]=useState(0)//call the hook function
    return(
        <div>
           <button data-testid = "decrease"
           onClick ={() => setData(data-1)}>Decrease the value</button>

            <h1 data-testid = "counter"> {data}</h1>

            <button data-testid = "increase"
            onClick={()=>setData(data+1)}> Increase the value</button>
        </div>
    )
}

export default Application;