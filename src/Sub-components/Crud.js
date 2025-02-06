import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
//import Edit from '../Sub-components/Edit.js'

function Crud() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8888/students/getStudents')
      .then((res) => {
        console.log("Fetched data:", res.data);
        if (Array.isArray(res.data)) {
          setStudents(res.data);  // If response is already an array
        } else if (Array.isArray(res.data.data)) {
          setStudents(res.data.data);  // Extract data array from object
        } else {
          console.error("Unexpected response format:", res.data);
        }
      })
      .catch(err => console.error("Error fetching students:", err));
  }, []);
  
  function update(id) {
    //alert(id)
    navigate('/edit', { state: { studentId: id } });
    
  }

  function remove(id) 
  {
    axios.delete(`http://localhost:8888/students/deleteStudent/`+id)
      .then(res => {
        console.log("Deleted:", res.data);
        setStudents(prevStudents => prevStudents.filter(student => student._id !== id));
      })
      .catch(err => console.error("Error deleting student:", err));
  }

  return (
    <div>
      <br />
      <Link className='btn btn-primary' to="student">Add Student</Link>
      <br />
      <h2>Students List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* For Each loop */}
          {students && students.length > 0 ? (
            students.map(student => (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.address}</td>
                <td>
                  <button className='btn btn-success' onClick={() => update(student._id)}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={() => remove(student._id)}>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">The Data Will Show Here</td>

            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default Crud;
