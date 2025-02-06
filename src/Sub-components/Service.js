import React, { useState,useEffect } from 'react'

//import React {useState} from 'react';
function Service() {
const [color, setColor] = useState("?????");
const [car] = useState({
  brand: "Ford",
  model: "Mustasdng",
  year: "1964",
  color: "red"
});
// const [count, setCount] = useState(0);  // Declare a new state variable, which we'll call "count"  
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[]);
const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here
  return (
    
    <div>
      <h1 className='text-center font-bold text-4xl'>Hooks</h1>
      <br/><br/><br/><br/>
      <p className='text-3xl text-center'>1- USE STATE</p>
      <br></br>
      <h1 className='text-center text-2xl mb-4'>Your favorite color is {color}</h1>
      <button className='bg-blue-600 ml-96 border-2' type="button" onClick={() => setColor("blue")}>Blue</button>
      <button className='bg-red-700 ml-5 ' type="button" onClick={() => setColor("red")}>Red</button>
      <button  className='bg-pink-600 ml-5  border-2' type="button" onClick={() => setColor("pink")}>Pink</button>
      <button  className='bg-green-600 ml-5 border-2' type="button" onClick={() => setColor("green")}>Green</button>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <p className='text-center text-3xl'>2- USE EFFECT</p>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
      {/* <h1>I've rendered {count} times!</h1> */}
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>

    </div>
  )
}

export default Service