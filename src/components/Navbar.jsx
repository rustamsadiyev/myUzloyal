import React from 'react';
import useGetData from '../../public/api/api';
import { useTranslation } from "react-i18next";

function Navbar() {
    const { t, i18n } = useTranslation();
    
    const { services, news, blogs, sources, faqs } = useGetData();

    const handleChangeLanguage = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
                    {/* Logo and Contact */}
                    <div className="flex items-center space-x-4">
                        {/* Logo */}
                        <img
                            src="/path-to-logo.png" 
                            alt="Loyal Logo"
                            className="h-12 w-12"
                        />
                        {/* Contact Info */}
                        <div>
                            <p className="text-green-700 font-bold">+998 90 131 95 44</p>
                            <p className="text-xs text-gray-500">Dushanba-Juma, 09:00 dan 18:00 gacha</p>
                        </div>
                    </div>

                    {/* Main Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {/* Example of using services for navigation */}
                        {services.length > 0 && services.map((service, index) => (
                            <a key={index} href={`/services/${service.id}`} className="text-black hover:text-green-700">
                                {service.text_ru[1] } {/* Switch based on language */}
                            </a>
                        ))}
                    </nav>

                    {/* Language Icons and Other Elements */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <img src="/path-to-uzbek-flag.png" alt="UZ Flag" className="h-6 w-6"/>
                        <img src="/path-to-english-flag.png" alt="EN Flag" className="h-6 w-6"/>
                        <img src="/path-to-russian-flag.png" alt="RU Flag" className="h-6 w-6"/>
                        <img src="/path-to-turkey-flag.png" alt="TR Flag" className="h-6 w-6"/>
                    </div>
                </div>

                {/* Sub Navigation */}
                <div className="bg-green-700 text-white py-3">
                    <div className="container mx-auto flex justify-center space-x-8">
                        <a href="/news" className="hover:text-gray-300">Yangiliklar</a>
                        <a href="/library" className="hover:text-gray-300">Yuridik kutubxona</a>
                        <a href="/services" className="hover:text-gray-300">Xizmatlar</a>
                        <a href="/documents" className="hover:text-gray-300">Hujjat Namunalari</a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
