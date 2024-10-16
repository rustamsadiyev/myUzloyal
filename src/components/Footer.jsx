import React from 'react'

function Footer() {
  return (
    <>

        
<footer className="bg-green-700 text-white py-10 mt-10 ">
  <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Logo and Description */}
    <div>
      <h2 className="text-2xl font-bold mb-4">LOYAL advokatlik byurosi</h2>
      <p className="mb-6">Biz Sizga mukammal yordam bera oladigan eng yaxshi yuridik firmamiz!</p>
      {/* Social icons */}
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-telegram"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    {/* Links Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Havolalar</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Asosiy</a></li>
        <li><a href="#" className="hover:underline">Biz haqimizda</a></li>
        <li><a href="#" className="hover:underline">Xizmatlar</a></li>
        <li><a href="#" className="hover:underline">Bizning maqolalar</a></li>
        <li><a href="#" className="hover:underline">Yangiliklar</a></li>
        <li><a href="#" className="hover:underline">Hujjat Namunalari</a></li>
        <li><a href="#" className="hover:underline">Savollarga javoblar</a></li>
        <li><a href="#" className="hover:underline">Bog'lanish</a></li>
      </ul>
    </div>

    {/* Services Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Xizmatlar</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Oila huquqi</a></li>
        <li><a href="#" className="hover:underline">Shaxsiy zarar</a></li>
        <li><a href="#" className="hover:underline">Jinoyat huquqi</a></li>
        <li><a href="#" className="hover:underline">Ta'lim huquqi</a></li>
        <li><a href="#" className="hover:underline">Biznes huquqi</a></li>
        <li><a href="#" className="hover:underline">Uy-joy huquqi</a></li>
      </ul>
    </div>
    
  </div>
</footer>



    </>
  )
}

export default Footer
