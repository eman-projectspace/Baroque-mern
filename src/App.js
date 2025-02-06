import React from 'react';
import './App.css';
import Nevigation from './Component/Nevigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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




function App() {
  return (
    <div>
      <Header/>
      <StudentState>
<BrowserRouter>      
<Nevigation/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/chantelle" element={<Chantelle/>}/>
<Route path="/unstitched" element={<Unstitched/>}/>
<Route path="/stitched" element={<Stitched/>}/>
<Route path="/readytowear" element={<Readytowear/>}/>
<Route path="/specialprices" element={<Specialprices/>}/>
<Route path="/seperates" element={<Seperates/>}/>
<Route path="/shawls" element={<Shawls/>}/>

<Route path="/service" element={<Service/>}/>
<Route path="/crud" element={<Crud/>}/>
<Route path="/edit" element={<Edit/>}/>
<Route path="crud/student" element={<Student/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/usecallbackhook" element={<Usecallbackhook/>}/>
<Route path="/usememohook" element={<UseMemohook/>}/>
</Routes>
</BrowserRouter>
</StudentState>
<Footer/>
   </div>
  );
}

export default App;