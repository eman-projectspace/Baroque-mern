import React, { useCallback,useState } from 'react'
import About from './About';
function Usecallbackhook() {
 const [count,setCount] = useState(0);
//const myFunc = "Eman Waheed"
   const myFunc = useCallback(()=>{},[]);
  return (
    <div>
      <About haderFunc = {myFunc}/>

      <hr></hr>
      <h1 className='text-3xl bold'>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>counter ++</button>
    </div>
  )
}

export default Usecallbackhook