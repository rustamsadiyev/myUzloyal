import React from 'react'
import { useTranslation } from "react-i18next";

function Navbar() {

    const { t, i18n } = useTranslation();
    const languageSelect = localStorage.getItem("i18nextLng");
  
    const handleChangeLanguage = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
  
  return (
    <>
     <div className="flex justify-center space-x-4 mt-4">
      <h1 className='text-2xl '>Navbar</h1>
        <button onClick={() => handleChangeLanguage("uz")}>
          <h1 className="text-2xl w-16 border border-red-600 rounded ">Uz</h1>
        </button>
        <button onClick={() => handleChangeLanguage("en")}>
          <h1 className="text-2xl w-16 border border-red-600 rounded">En</h1>
        </button>
        <button onClick={() => handleChangeLanguage("ru")}>
          <h1 className="text-2xl w-16 border border-red-600 rounded">Ru</h1>
        </button>
        <button onClick={() => handleChangeLanguage("tur")}>
          <h1 className="text-2xl w-16 border border-red-600 rounded">Tur</h1>
        </button>
        <button onClick={() => handleChangeLanguage("cn")}>
          <h1 className="text-2xl w-16 border border-red-600 rounded">Cn</h1>
        </button>
      <h1>{t("start")}</h1>
      </div>
       

    </>
  )
}

export default Navbar
