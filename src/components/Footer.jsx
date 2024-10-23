import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
        
<footer className="bg-green-700 text-white py-10 pt-10">
  <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 ">
    
    {/* Logo and Description */}
    <div>
      <h2 className="text-2xl font-bold mb-4">LOYAL advokatlik byurosi</h2>
      <p className="mb-6">Biz Sizga mukammal yordam bera oladigan eng yaxshi yuridik firmamiz!</p>
      {/* Social icons */}
      <div className="flex space-x-4">
  <a href="https://www.facebook.com/people/Advokat-uzbekistan-24/61554269997134/?mibextid=ZbWKwL" target='blank' className="flex items-center  bg-gray-700  justify-center w-[40px] h-[40px] border rounded-full hover:text-gray-200">
    <FaFacebookF />
  </a>
  <a href="https://t.me/uz_loyal" target='blank' className="flex items-center bg-gray-700  justify-center w-[40px] h-[40px] border rounded-full hover:text-gray-200">
    <FaTelegramPlane />
  </a>
  <a href="https://www.instagram.com/advokat_uzbekistan_24/" target='blank' className="flex items-center bg-gray-700  justify-center w-[40px] h-[40px] border rounded-full hover:text-gray-200">
    <FaInstagram />
  </a>
</div>

    </div>

    {/* Links Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Havolalar</h3>
      <ul className="space-y-2">
        <li><a href="/" className="hover:underline">Asosiy</a></li>
        <li><a href="about" className="hover:underline">Biz haqimizda</a></li>
        <li><a href="services" className="hover:underline">Xizmatlar</a></li>
        <li><a href="blog" className="hover:underline">Bizning maqolalar</a></li>
        <li><a href="news" className="hover:underline">Yangiliklar</a></li>
        <li><a href="samples" className="hover:underline">Hujjat Namunalari</a></li>
        <li><a href="faqs" className="hover:underline">Savollarga javoblar</a></li>
        <li><a href="contact" className="hover:underline">Bog'lanish</a></li>
      </ul>
    </div>

    {/* Services Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Xizmatlar</h3>
      <ul className="space-y-2">
        <li><a href="/contact" className="hover:underline">Oila huquqi</a></li>
        <li><a href="#" className="hover:underline">Shaxsiy zarar</a></li>
        <li><a href="#" className="hover:underline">Jinoyat huquqi</a></li>
        <li><a href="#" className="hover:underline">Ta'lim huquqi</a></li>
        <li><a href="#" className="hover:underline">Biznes huquqi</a></li>
        <li><a href="#" className="hover:underline">Uy-joy huquqi</a></li>
      </ul>
    </div>
    
  </div> <br /><hr className="border-black" />

  <div className="copyrights flex w-[90%] m-auto justify-between items-center h-full ">
    <div className="copyright-start">
    <p>
    Copyright © 2023 Loyal.uz. All rights reserved.
    </p>
    </div>

    <div className="coyright-end lg:space-x-8 ">
      
    <a href=""><span>Privace & Policy</span></a>
    <a href=""><span>Terms</span></a>
    <a href=""><span>Abouts</span></a>
    <a href=""><span>FAQs</span></a>

    </div>

  </div>
</footer>



    </>
  )
}

export default Footer