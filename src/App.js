import React, { useState, useEffect } from 'react';
// import './App.css';
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
import StudentState from './Context/StudentState';
import Crud from './Sub-components/Crud';
import Edit from './Sub-components/Edit';
import Student from './Sub-components/Student';
import Footer from './Component/Footer';
import DressesContext from './Context/DressesContext'; 
import axios from "axios";
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import ProductDetails from './Baroque/ProductDetails';
import Cart from './Baroque/Cart';
import Checkout from './pages/Checkout';
import EditProduct from './pages/EditProducts';
import CustomerLogin from './pages/CustomerLogin';
import CustomerSignup from './pages/CustomerSignup';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';


function App() {
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

  return (
    <DressesContext.Provider value={{ dresses, setDresses }}>  
      <Header />
      <StudentState>
        <BrowserRouter>
          <Nevigation />
          <Routes>
            {/* USER WILL SEE THESE ROUTES */}
  <Route path="/" element={<Home />} />
  <Route path="/chantelle" element={<Chantelle dresses={dresses.filter(d => d.category === "chantelle")}    />} />
  <Route path="/unstitched" element={<Unstitched dresses={dresses.filter(d => d.category === "unstitched")} />} />
  <Route path="/stitched" element={<Stitched dresses={dresses.filter(d => d.category === "stitched")}        />} />
  <Route path="/readytowear" element={<Readytowear dresses={dresses.filter(d => d.category === "readytowear")} />}/>
  <Route path="/specialprices"element={<Specialprices dresses={dresses.filter(d => d.category==="specialprices")}/>}/>
  <Route path="/seperates" element={<Seperates dresses={dresses.filter(d => d.category === "seperates")} />} />
  <Route path="/shawls" element={<Shawls dresses={dresses.filter(d => d.category === "shawls")} />} />
  <Route path="/product/:id" element={<ProductDetails />} /> {/* Add this */}
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  {/* Customer Login Signup Route */}
  <Route path="/customerlogin" element={<CustomerLogin />} />         
  <Route path="/customersignup" element={<CustomerSignup />} />
  <Route path="/customerdashboard" element={<CustomerDashboard />} />
            {/* USER CANT SEE THESE ROUTES */}
  <Route path="/editproduct" element={<EditProduct />} />         
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<PrivateRoute />}>
  <Route path="" element={<AdminDashboard />} />
</Route>
         {/* CRUD API */}
  <Route path="/crud" element={<Crud />} />
  <Route path="/edit" element={<Edit />} />
  <Route path="crud/student" element={<Student />} />
</Routes>

        </BrowserRouter>
      </StudentState>
      <Footer />
    </DressesContext.Provider>
  );
}

export default App;