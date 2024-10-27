import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const {t} = useTranslation()

  return (

    <>

        
<footer className="bg-green-700 text-white py-10 mt-10 ">
  <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Logo and Description */}
    <div>
      <h2 className="text-2xl font-bold mb-4">{t("loyal_law_firm")}</h2>
      <p className="mb-6">{t("slogan")}</p>
      {/* Social icons */}
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/people/Advokat-uzbekistan-24/61554269997134/?mibextid=ZbWKwL" target='blank' className="text-white hover:text-gray-200">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/advokat_uzbekistan_24/" target='blank' className="text-white hover:text-gray-200">
          <i className="fab fa-telegram"></i>
        </a>
        <a href="https://telegram.org/Lazy_frontend_developer" target='blank' className="text-white hover:text-gray-200">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    {/* Links Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">{t("")}</h3>
      <ul className="space-y-2">
        <li><a href="/main" className="hover:underline">{t('home')}</a></li>
        <li><a href="about"  className="hover:underline"> {t("about_us")} </a></li>
        <li><a href="/services" className="hover:underline">{t("services")}</a></li>
        <li><a href="/blog"  className="hover:underline">{t("articles")}</a></li>
        <li><a href="/news"  className="hover:underline">{t("news")}</a></li>
        <li><a href="/samples" className="hover:underline">{t("document_samples")}</a></li>
        <li><a href="/faqs" className="hover:underline">{t("faqs")}</a></li>
        <li><a href="/contact" className="hover:underline">{t("contact")}</a></li>
      </ul>
    </div>

    {/* Services Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Xizmatlar</h3>
      <ul className="space-y-2">
        <li><a href="/services" className="hover:underline">{t("family_law")}</a></li>
        <li><a href="/services" className="hover:underline">{t("personal_injury")}</a></li>
        <li><a href="/services" className="hover:underline">{t("criminal_law")}</a></li>
        <li><a href="/services" className="hover:underline">{t("education_law")}</a></li>
        <li><a href="/services" className="hover:underline">{t("business_law")}</a></li>
        <li><a href="/services" className="hover:underline">{t("housing_law")}</a></li>
      </ul>
    </div>
    
  </div>
</footer>



    </>
  )
}

export default Footer
