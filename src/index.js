// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import AuthContext from "./Context/AuthContext.js";
import { ProductProvider } from "./Context/ProductContext.js"; // Import ProductProvider
//import DressesContext from "./Context/DressesContext.js";
import { CartProvider } from './Context/CartContext';
import OrderContext from "./Context/OrderContext.js";
import AdminContext from "./Context/AdminContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContext.Provider value={{ user: null, setUser: () => {} }}>
      <ProductProvider>
        <CartProvider> {/* Use CartProvider here */}
          <OrderContext.Provider value={{ orders: [], setOrders: () => {} }}>
            <AdminContext.Provider value={{ admin: { isAdmin: false }, setAdmin: () => {} }}>
              <App />
            </AdminContext.Provider>
          </OrderContext.Provider>
        </CartProvider> {/* Close CartProvider here */}
      </ProductProvider>
    </AuthContext.Provider>
  </React.StrictMode>
);

reportWebVitals();

