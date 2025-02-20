import React, { useState } from 'react';

const Footer = () => {
  const [isAboutOpen,setAboutOpen] = useState(false)
  const [isServiceOpen,setServiceOpen] = useState(false)
  const [isPoliciesOpen,setPoliciesOpen] = useState(false)
  return (
  
    <div >

<hr/>
<br/><br/><br/><br/>
{/* Laptop Screen */}
<div className="leading-8 hidden md:block ">
  <div className='border-2 flex'>
  <div className="md:ms-20 inline ">
    <b>ABOUT</b>
    <br/>who we are
    <br/>Our Responsibility
    <br/>Servie We Provide
    <br/>Careers
    <br/>Legal
    </div>
  <div className="md:ms-80 inline">
    <b>CUSTOMER SERVICE</b>
    <br/>Contact Us
    <br/>Dispatch TimeLine
    <br/>Email: info@ baroque.pk
    <br/>Call:+92 325 700 1111
    <br/>Whatsapp:+92 325 700 1111
    </div>
  <div className="md:ms-80 inline">
    <b>POLICIES</b>
    <br/>Privacy Policy
    <br/>Refund Policy
    <br/>Shipping Policy
    <br/>Terms of Service
    <br/>Exchange Information
    </div> 
    </div>


    </div>

  {/* Mobile Screen */}
<div className='ml-5 mr-5'>
<div>
  {/* ABOUT */}
          <button
            className="w-full text-left text-lg  justify-between font-serif block md:hidden
             mt-2 pt-3 pb-3  border-y-slate-400 border-t-2 "
            onClick={() => setAboutOpen(!isAboutOpen)}>
            <span className='ml-5 font-mono mr-5'>About</span> 
            <span>{isAboutOpen ? "▲" : "▼"}</span> </button>
          {isAboutOpen && <p className="mt-2 ml-2 text-left "> 
Who We Are<br/>
Our Responsibility<br/>
Service We Provide<br/>
Careers<br/>
Legal<br/>
Retail Outlet : Shop F-06, First Floor, Dolmen Mall, Sector A, DHA <br/>Phase 6, Lahore, Punjab, Pakistan
             </p>}
          
        </div>
        {/* SERVICE */}
 <button
            className="w-full text-left mt-2 pt-3 pb-3 text-lg border-y-slate-400 border-t-2 border-b-2  justify-between font-serif block md:hidden" onClick={()=>setServiceOpen(!isServiceOpen)}>
  <span className='ml-4 font-mono mr-5'> CUSTOMER SERVICE</span> 
  <span>{isServiceOpen ? "▲" : "▼"}</span></button>
  {isServiceOpen && <p className="mt-2 text-left ml-5 ">
    Contact Us <br/>
Dispatch Timeline  <br/>
Email: info@baroque.pk  <br/>
Call: +92 325 700 1111  <br/>
WhatsApp: +92 325 7001111  <br/>
    </p>}      
{/* About */}
     <button
            className="w-full  mt-2 pt-3 pb-3 text-lg border-y-slate-400 border-b-2  text-left  justify-between font-serif block md:hidden" onClick={()=>setPoliciesOpen(!isPoliciesOpen)}>
  <span className='ml-4 font-mono mr-5'>POLICIES</span> 
  <span>{isPoliciesOpen ? "▲" : "▼"}</span></button>
  {isPoliciesOpen && <p className="mt-2 text-left ml-5 ">
 Privacy Policy <br/>
Refund Policy <br/>
Shipping Policy <br/>
Terms of Service <br/>
Exchange Information <br/>
    </p>}    
    </div>
    
{/* IMAGES */}
              <div className='flex gap-4 mt-10 mb-5 ml-10'>
                <img className='w-5 h-5 ml-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt=""/>
                <img  className='w-5 h-5 ml-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt=""/>
                <img  className='w-5 h-5 ml-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt=""/>
                <img  className='w-5 h-5 ml-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png" alt=""/>
                <img  className='w-5 h-5 ml-5  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/733/733627.png" alt=""/>
                <img  className='w-5 h-5 ml-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt=""/>
                </div>

                <p className='mt-3 cursor-pointer font-mono inline-block text-gray-500 ml-20 '>PAKISTAN</p>  
                <br/>  <br/>  <br/>
      </div>
  )
}

export default Footer