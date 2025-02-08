import React, {useContext,useState,useEffect} from 'react'
 import studentContext from '../Context/StudentContext'


function About() {
const studContext = useContext(studentContext)
  const [count,setCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1)
    },1000);
  },[]);

  return (
    <div>
        <h1 className='text-center text-3xl font-bold'>ABOUT</h1>
      <br/><br/><br/><br/>

<h1>Count Are here {count}</h1>

<br/><br/>
      <h1 className='text-3xl font-bold'>MY NEW DATA</h1>
      Student name is :{studContext.name}  <br/>
      Roll no :{studContext.rollno} <br/>
      Address is :{studContext.Address}
  </div>
  )
}
  export default React.memo(About)