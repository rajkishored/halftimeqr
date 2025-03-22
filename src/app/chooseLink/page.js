// app/chooseLink/page.js

import React from 'react';
import { FaGoogle, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const ChooseLinkPage = () => {
  return (
    <div className='bg-gray-950 h-[100vh] '>
      <div>
        <img className='object-cover w-full' src="/halftime.jpg"/>
      </div>

      <div className='w-[90%] m-auto pt-5 flex flex-col gap-6 text-center'  >
      <div >
        <a
          href="https://wa.me/919148541294?text=hello"
          target="_blank"
          rel="noopener noreferrer"
          className='text-white bg-green-500 text-sm px-23 py-3 rounded-xl'
        >
           WhatsApp      <FaWhatsapp className='inline text-xl' />
        </a>
      </div>

      <div style={{ marginTop: '10px' }}>
        <a
          href="https://www.instagram.com/half_time_cafe_"
          target="_blank"
          rel="noopener noreferrer"
         className='bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white text-sm px-23 py-3 rounded-xl'
        >
           Instagram <FaInstagram className="inline text-xl" />
        </a>
      </div>

      {/* Link 2 */}
      <div style={{ marginTop: '10px' }}>
        <a
          href="https://g.co/kgs/MHpYJWz"
          target="_blank"
          rel="noopener noreferrer"
         className='bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white text-sm px-25 py-3 rounded-xl'
        >
          Google  <FaGoogle className='inline text-lg' />
        </a>
      </div>

      {/* Link 3 */}
      
      </div>
    </div>
  );
};

// Button style
const buttonStyle = {
  display: 'inline-block',
  fontSize: '18px',
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default ChooseLinkPage;
