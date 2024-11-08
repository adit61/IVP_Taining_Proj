import React, {useState} from 'react'

const UseStateHook1 = () => {
    const[data,setData]= useState("Nikhil");
    const[count,setCount]= useState(0);

    const incrementFive = () => {
        for(let i=0; i<5;i++){
            setCount(prevCount => prevCount+1)
        }
    }

  return (
    <div>
        <h1>{data}</h1>
      <button onClick={() => {setData("Vicky")}}>Click me</button>
      <h1>Count : {count}</h1>
      <button onClick={() => {setCount(prevCount => prevCount+1)}}>Increment</button>
      <button onClick={() => {setCount(prevCount => prevCount-1)}}>Decrement</button>
      <button onClick={() => {setCount(0)}}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>



    </div>
  )
}

export default UseStateHook1
