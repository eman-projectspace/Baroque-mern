import React, { useState } from 'react';

const Footer = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isPoliciesOpen, setPoliciesOpen] = useState(false);

  return (
    <div className="bg-white px-5 md:px-20 py-10">
      <hr className="mb-10" />

      {/* Desktop View */}
      <div className="hidden md:flex justify-between text-sm leading-8">
        {/* ABOUT */}
        <div>
          <b>ABOUT</b>
          <p>Who we are</p>
          <p>Our Responsibility</p>
          <p>Service We Provide</p>
          <p>Careers</p>
          <p>Legal</p>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <b>CUSTOMER SERVICE</b>
          <p>Contact Us</p>
          <p>Dispatch Timeline</p>
          <p>Email: info@baroque.pk</p>
          <p>Call: +92 325 700 1111</p>
          <p>Whatsapp: +92 325 700 1111</p>
        </div>

        {/* POLICIES */}
        <div>
          <b>POLICIES</b>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Terms of Service</p>
          <p>Exchange Information</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden text-sm">
        {/* ABOUT */}
        <div>
          <button
            className="w-full text-left text-lg font-semibold py-3 border-t"
            onClick={() => setAboutOpen(!isAboutOpen)}
          >
            <span className="ml-2 font-mono">ABOUT</span>
            <span className="float-right mr-5">{isAboutOpen ? '-' : '+'}</span>
          </button>
          {isAboutOpen && (
            <div className="pl-5 mt-2">
              <p>Who We Are</p>
              <p>Our Responsibility</p>
              <p>Service We Provide</p>
              <p>Careers</p>
              <p>Legal</p>
              <p>Retail Outlet: Shop F-06, First Floor, Dolmen Mall, Sector A, DHA Phase 6, Lahore</p>
            </div>
          )}
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <button
            className="w-full text-left text-lg font-semibold py-3 border-t"
            onClick={() => setServiceOpen(!isServiceOpen)}
          >
            <span className="ml-2 font-mono">CUSTOMER SERVICE</span>
            <span className="float-right mr-5">{isServiceOpen ? '-' : '+'}</span>
          </button>
          {isServiceOpen && (
            <div className="pl-5 mt-2">
              <p>Contact Us</p>
              <p>Dispatch Timeline</p>
              <p>Email: info@baroque.pk</p>
              <p>Call: +92 325 700 1111</p>
              <p>WhatsApp: +92 325 700 1111</p>
            </div>
          )}
        </div>

        {/* POLICIES */}
        <div>
          <button
            className="w-full text-left text-lg font-semibold py-3 border-t border-b"
            onClick={() => setPoliciesOpen(!isPoliciesOpen)}
          >
            <span className="ml-2 font-mono">POLICIES</span>
            <span className="float-right mr-5">{isPoliciesOpen ? '-' : '+'}</span>
          </button>
          {isPoliciesOpen && (
            <div className="pl-5 mt-2">
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
              <p>Shipping Policy</p>
              <p>Terms of Service</p>
              <p>Exchange Information</p>
            </div>
          )}
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex flex-wrap gap-4 mt-10 ml-2 md:ml-0 ">
        {[
          'https://cdn-icons-png.flaticon.com/128/20/20837.png',
          'https://cdn-icons-png.flaticon.com/128/1077/1077042.png',
          'https://cdn-icons-png.flaticon.com/128/1384/1384028.png',
          'https://cdn-icons-png.flaticon.com/128/3046/3046120.png',
          'https://cdn-icons-png.flaticon.com/128/733/733627.png',
          'https://cdn-icons-png.flaticon.com/128/1384/1384023.png',
        ].map((icon, index) => (
          <img
            key={index}
            src={icon}
            className="w-6 h-6 cursor-pointer"
            alt={`icon-${index}`}
          />
        ))}
      </div>

      <p className="mt-6 font-mono text-gray-500 ml-2 md:ml-20">PAKISTAN</p>
    </div>
  );
};

export default Footer;
