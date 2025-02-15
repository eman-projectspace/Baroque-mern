import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Student() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    roll: '',
    address: '',
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log("Submitting Data:", data);
    //axios.post(`http://localhost:9000/students/addStudents`, data)
    axios.post('http://localhost:8888/students/addStudent', data)

      .then(res => {
        console.log("Response:", res);
        navigate('/crud'); // Navigate after successful submission
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  // function changeHandler(e) {
  //   setData(prevData => ({
  //     ...prevData,
  //     [e.target.id]: e.target.value
  //   }));                
  // }
function changeHandler(e){
  const newdata = {...data}
  console.log(newdata)
  newdata[e.target.id]=e.target.value
  console.log(newdata)
  setData(newdata)

}
  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={(e)=>submitHandler(e)}>
        <div>
          <input className='border-2' placeholder='Roll No' type="number" id="roll" value={data.roll || ''} onChange={(e)=>changeHandler(e)} />
        </div>
        <div>
          <input className='border-2' placeholder='Name' type="text" id="name" value={data.name} onChange={(e)=>changeHandler(e)} />
        </div>
        <div>
          <input className='border-2' placeholder='Address' type="text" id="address" value={data.address} onChange={(e)=>changeHandler(e)} />
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}
