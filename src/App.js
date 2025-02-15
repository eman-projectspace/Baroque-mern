import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nevigation from './Component/Nevigation';
import Header from './Component/Header';
import Home from './Baroque/Home';
import Chantelle from './Baroque/Chantelle';
import Unstitched from './Baroque/Unstitched';
import Stitched from './Baroque/Stitched';
import Readytowear from './Baroque/Readytowear';
import Specialprices from './Baroque/Specialprices';
import Seperates from './Baroque/Seperates';
import Shawls from './Baroque/Shawls';
import About from './Sub-components/About';
import Service from './Sub-components/Service';
import Usecallbackhook from './Sub-components/Usecallbackhook';
import UseMemohook from './Sub-components/UseMemohook';
import StudentState from './Context/StudentState';
import Crud from './Sub-components/Crud';
import Edit from './Sub-components/Edit';
import Student from './Sub-components/Student';
import Footer from './Component/Footer';
import DressesContext from './Context/DressesContext'; // Import DressContext
import axios from "axios";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  // Dress state
  const [dresses, setDresses] = useState([]);

useEffect(() => {
  const fetchDresses = async () => {
    try {
      const res = await axios.get("http://localhost:8888/api/products"); // Fetch from backend
      setDresses(res.data);
    } catch (error) {
      console.error("Error fetching dresses:", error);
    }
  };
  fetchDresses();
}, []);

  //  Fetch dresses from an API or local JSON file when the app loads
  // useEffect(() => {
  //  fetch('/data/dresses.json') // Replace this with actual API if needed
  //     .then((res) => res.json())
  //     .then((data) => setDresses(data));
  // }, []);

  return (
    <DressesContext.Provider value={{ dresses, setDresses }}>  
      <Header />
      <StudentState>
        <BrowserRouter>
          <Nevigation />
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/chantelle" element={<Chantelle dresses={dresses.filter(d => d.category === "chantelle")}    />} />
  <Route path="/unstitched" element={<Unstitched dresses={dresses.filter(d => d.category === "unstitched")} />} />
  <Route path="/stitched" element={<Stitched dresses={dresses.filter(d => d.category === "stitched")}        />} />
  <Route path="/readytowear" element={<Readytowear dresses={dresses.filter(d => d.category === "readytowear")} />} />
  <Route path="/specialprices" element={<Specialprices dresses={dresses.filter(d => d.category === "specialprices")} />} />
  <Route path="/seperates" element={<Seperates dresses={dresses.filter(d => d.category === "seperates")} />} />
  <Route path="/shawls" element={<Shawls dresses={dresses.filter(d => d.category === "shawls")} />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<PrivateRoute />}>
  <Route path="" element={<Dashboard />} />
</Route>
  {/* <Route path="/dashboard" element={<Dashboard />} /> */}
  <Route path="/service" element={<Service />} />
  <Route path="/crud" element={<Crud />} />
  <Route path="/edit" element={<Edit />} />
  <Route path="crud/student" element={<Student />} />
  <Route path="/about" element={<About />} />
  <Route path="/usecallbackhook" element={<Usecallbackhook />} />
  <Route path="/usememohook" element={<UseMemohook />} />
</Routes>

        </BrowserRouter>
      </StudentState>
      <Footer />
    </DressesContext.Provider>
  );
}

export default App;