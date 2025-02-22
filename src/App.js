import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nevigation from "./Component/Nevigation";
import Header from "./Component/Header";
import Home from "./Baroque/Home";
import Chantelle from "./Baroque/Chantelle";
import Unstitched from "./Baroque/Unstitched";
import Stitched from "./Baroque/Stitched";
import Readytowear from "./Baroque/Readytowear";
import Specialprices from "./Baroque/Specialprices";
import Seperates from "./Baroque/Seperates";
import Shawls from "./Baroque/Shawls";
import StudentState from "./Context/StudentState";
import Crud from "./Sub-components/Crud";
import Edit from "./Sub-components/Edit";
import Student from "./Sub-components/Student";
import Footer from "./Component/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ProductDetails from "./Baroque/ProductDetails";
import Cart from "./Baroque/Cart";
import Checkout from "./pages/Checkout";
import EditProduct from "./pages/EditProducts";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerSignup from "./pages/CustomerSignup";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { ProductProvider } from "./Context/ProductContext";
import ManageOrders from "./Manage/ManageOrders";
import ManageUsers from "./Manage/ManageUsers";
import ManageProducts from "./Manage/ManageProducts";
import ManageMore from "./Manage/ManageMore";

// Move useLocation inside a separate component
const Layout = () => {
  const location = useLocation();

  // Routes where Nevigation & Footer should NOT appear
  const hideOnRoutes = ["/dashboard", "/admin", "/login", "/customerlogin", "/customersignup"];

  const shouldShowNevigationFooter = !hideOnRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
          <Header/>
      {shouldShowNevigationFooter && <Nevigation />}
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/chantelle" element={<Chantelle />} />
        <Route path="/unstitched" element={<Unstitched />} />
        <Route path="/stitched" element={<Stitched />} />
        <Route path="/readytowear" element={<Readytowear />} />
        <Route path="/specialprices" element={<Specialprices />} />
        <Route path="/seperates" element={<Seperates />} />
        <Route path="/shawls" element={<Shawls />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* CUSTOMER AUTH ROUTES */}
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/customersignup" element={<CustomerSignup />} />
        <Route path="/customerdashboard" element={<CustomerDashboard />} />

        {/* ADMIN ROUTES */}
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="manage-more" element={<ManageMore />} />
        </Route>

        {/* CRUD API */}
        <Route path="/crud" element={<Crud />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="crud/student" element={<Student />} />
      </Routes>
      {shouldShowNevigationFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <ProductProvider>
      <StudentState>
        {/*  Wrap the entire app inside BrowserRouter */}
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </StudentState>
    </ProductProvider>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// // import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Nevigation from './Component/Nevigation';
// import Header from './Component/Header';
// import Home from './Baroque/Home';
// import Chantelle from './Baroque/Chantelle';
// import Unstitched from './Baroque/Unstitched';
// import Stitched from './Baroque/Stitched';
// import Readytowear from './Baroque/Readytowear';
// import Specialprices from './Baroque/Specialprices';
// import Seperates from './Baroque/Seperates';
// import Shawls from './Baroque/Shawls';
// import StudentState from './Context/StudentState';
// import Crud from './Sub-components/Crud';
// import Edit from './Sub-components/Edit';
// import Student from './Sub-components/Student';
// import Footer from './Component/Footer';
// import DressesContext from './Context/DressesContext'; 
// import axios from "axios";
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import PrivateRoute from './pages/PrivateRoute';
// import ProductDetails from './Baroque/ProductDetails';
// import Cart from './Baroque/Cart';
// import Checkout from './pages/Checkout';
// import EditProduct from './pages/EditProducts';
// import CustomerLogin from './pages/CustomerLogin';
// import CustomerSignup from './pages/CustomerSignup';
// import CustomerDashboard from './pages/CustomerDashboard';
// import AdminDashboard from './pages/AdminDashboard';


// function App() {
//   const [dresses, setDresses] = useState([]);

// useEffect(() => {
//   const fetchDresses = async () => {
//     try {
//       const res = await axios.get("http://localhost:8888/api/products"); // Fetch from backend
//       setDresses(res.data);
//     } catch (error) {
//       console.error("Error fetching dresses:", error);
//     }
//   };
//   fetchDresses();
// }, []);

//   return (
//     <DressesContext.Provider value={{ dresses, setDresses }}>  
//       <Header />
//       <StudentState>
//         <BrowserRouter>
//           <Nevigation />
//           <Routes>
//             {/* USER WILL SEE THESE ROUTES */}
//   <Route path="/" element={<Home />} />
//   <Route path="/chantelle" element={<Chantelle dresses={dresses.filter(d => d.category === "chantelle")}    />} />
//   <Route path="/unstitched" element={<Unstitched dresses={dresses.filter(d => d.category === "unstitched")} />} />
//   <Route path="/stitched" element={<Stitched dresses={dresses.filter(d => d.category === "stitched")}        />} />
//   <Route path="/readytowear" element={<Readytowear dresses={dresses.filter(d => d.category === "readytowear")} />}/>
//   <Route path="/specialprices"element={<Specialprices dresses={dresses.filter(d => d.category==="specialprices")}/>}/>
//   <Route path="/seperates" element={<Seperates dresses={dresses.filter(d => d.category === "seperates")} />} />
//   <Route path="/shawls" element={<Shawls dresses={dresses.filter(d => d.category === "shawls")} />} />
//   <Route path="/product/:id" element={<ProductDetails />} /> {/* Add this */}
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/checkout" element={<Checkout />} />
//   {/* Customer Login Signup Route */}
//   <Route path="/customerlogin" element={<CustomerLogin />} />         
//   <Route path="/customersignup" element={<CustomerSignup />} />
//   <Route path="/customerdashboard" element={<CustomerDashboard />} />
//             {/* USER CANT SEE THESE ROUTES */}
//   <Route path="/editproduct" element={<EditProduct />} />         
//   <Route path="/signup" element={<Signup />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/dashboard" element={<PrivateRoute />}>
//   <Route path="" element={<AdminDashboard />} />
// </Route>
//          {/* CRUD API */}
//   <Route path="/crud" element={<Crud />} />
//   <Route path="/edit" element={<Edit />} />
//   <Route path="crud/student" element={<Student />} />
// </Routes>

//         </BrowserRouter>
//       </StudentState>
//       <Footer />
//     </DressesContext.Provider>
//   );
// }

// export default App;