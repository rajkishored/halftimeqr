// app/chooseLink/page.js

import React from "react";
import {
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ChooseLinkPage = () => {
  return (
    <div className="bg-black h-dvh ">
      <div className="max-w-[100%] pt-14 m-auto rounded-10xl border-amber-50 border-b-2">
        <img className="object-cover w-full rounded-5xl border-amber-50" src="/halftime.jpg" />
      </div>
      <div className="max-w-[90%] mx-auto text-center mt-14">
        <h2 className="text-orange-300 text-3xl font-sans font-semibold   text-center ">
          Hello!
        </h2>
        <h2 className="text-white text-[14px] font-sans mt-2 text-center   ">
          Stay connected with us! Follow us on{" "}
          <span className="font-semibold text-amber-50">Instagram</span>, chat
          with us on{" "}
          <span className="font-semibold text-amber-50">WhatsApp</span>, or
          explore our{" "}
          <span className="font-semibold text-amber-50">Google</span> page. Just
          click the buttons below to get started!
        </h2>
      </div>
      {/* <div class="w-[100%] h-[1px] bg-amber-100  animate-flash"></div> */}

      <div className="w-[90%] m-auto pt-21 flex flex-col gap-6 text-center">
        <div>
          <a
            href="https://wa.me/919148541294?text=hello"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 text-sm px-23 py-3 rounded-xl"
          >
            WhatsApp <FaWhatsapp className="inline text-xl" />
          </a>
        </div>

        <div style={{ marginTop: "10px" }}>
          <a
            href="https://www.instagram.com/half_time_cafe_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white text-sm px-23 py-3 rounded-xl"
          >
            Instagram <FaInstagram className="inline text-xl" />
          </a>
        </div>

        {/* Link 2 */}
        <div style={{ marginTop: "10px" }}>
          <a
            href="https://g.co/kgs/MHpYJWz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white text-sm px-25 py-3 rounded-xl"
          >
            Google <FaGoogle className="inline text-lg" />
          </a>
        </div>

        {/* Link 3 */}
      </div>
   

      <h2 className="text-gray-400 text-[8px] absolute bottom-3 left-[41%] tex">
        halftimecafe@{new Date().getFullYear()}
      </h2>
    </div>
  );
};

export default ChooseLinkPage;
