import React , {useState} from 'react'//import hook state function

const HookCounterTwo =()=> {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)//call the hook function

    const increamentTen = () => {
        for(let i=0;i<10;i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
       
        <div>
           Count is  : {count}
           <button onClick ={() => setCount(initialCount)}>Reset</button>
           <button onClick ={() => setCount(prevCount => prevCount + 1)}>Increment</button>
           <button onClick ={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
           <button onClick ={increamentTen}>Increment10</button>
           </div>
    )
}

export default HookCounterTwo;