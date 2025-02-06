import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const location = useLocation();
  const id = location.state.studentId;  // Added optional chaining to avoid crashes
  const navigate = useNavigate();
  console.log("Student ID:", id);
  const [data, setData] = useState({
    roll: '',
    name: '',
    address: '',
  });

  useEffect(() => {
    if (!id) return;  // Prevent fetching if ID is missing
    axios.get(`http://localhost:8888/students/singleStudent/` + id)
      .then(res => {
        console.log("Fetched Student:", res.data);
        setData(res.data);
      })
      .catch(err => console.error("Error fetching student:", err));
  }, [id]);

  function changeHandler(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function updateHandler(e) {
    e.preventDefault();
    //console.log(data)
    axios.put(`http://localhost:8888/students/updateStudent/` + id, data)
      .then(res => {
        console.log("Updated successfully:", res.data);
        navigate('/crud');
      })
      .catch(error => {
        console.error("Error updating student:", error.response ? error.response.data : error.message);
      });
  }

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={(e)=>updateHandler(e)}>
        <div>    
          <input className="border-2" type="number" id="roll" value={data.roll} onChange={(e)=>changeHandler(e)} placeholder="Roll No" />
        </div>
        <div> 
          <input className="border-2" type="text" id="name" value={data.name} onChange={(e)=>changeHandler(e)} placeholder="Name" />
        </div>
        <div>
          <input className="border-2" type="text" id="address" value={data.address} onChange={changeHandler} placeholder="Address" />
        </div>
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edit;
