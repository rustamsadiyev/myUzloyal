import React from 'react';
import mainBg from "/public/assets/mainImage.jpg";
import useGetData from '/public/api/api';
import { GoArrowRight } from 'react-icons/go';
import { useTranslation } from "react-i18next";



function Samples() {
  
  const { sources } = useGetData();
  const { t, i18n } = useTranslation();

  return (
    <div>

      {/* Main Background Section */}
      <div
        className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="text-white w-[90%] m-auto h-full flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{t("Hujjat Namunalari")}</h1>
          <br />
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
            <a href="#" className="tracking-wide text-white"> Home-</a>{t("Hujjat Namunalari")}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main bg-gray-200 py-10 shadow-md">
        <div className="container w-[90%] m-auto flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            {/* First Card */}
            <div className="card w-full lg:w-[48%] bg-white rounded-lg p-5 flex flex-col">
              <div className="flex items-center mb-4">
                <img className="w-[15%] sm:w-[10%] mr-5" src="public/assets/puzzleImage.svg" alt="" />
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl">Qonunlar</h1>
                  <div className="laws mt-2">
                    {sources?.slice(23, 27).map((value, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <GoArrowRight className="text" />
                        <a
                          download
                          href={`https://test.uzloyal.uz/api/uploads/images/${value.src}`}
                          className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                        >
                          {value.category_name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="card w-full lg:w-[48%] bg-white rounded-lg p-5 flex flex-col">
              <div className="flex items-center mb-4">
                <img className="w-[15%] sm:w-[10%] mr-5" src="public/assets/puzzleImage.svg" alt="" />
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl">Oliy Sud Plenum Qarorlari</h1>
                  <div className="laws mt-2">
                    {sources?.slice(30, 33).map((value, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <GoArrowRight className="text" />
                        <a
                          download
                          href={`https://test.uzloyal.uz/api/uploads/images/${value.src}`}
                          className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                        >
                          {value.category_name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="card w-full lg:w-[48%] bg-white rounded-lg p-5 flex items-center">
            <img className="w-[15%] sm:w-[10%] mr-5" src="public/assets/puzzleImage.svg" alt="" />
            <div>
            <h1 className="text-lg sm:text-xl md:text-2xl">Yuridik Masalalar</h1>
            <div>
              <div className="mt-2" >
              {
                sources.filter((value => value.title === "test"))
                .map((item, index)=> (
                  <div key={index} className="flex gap-2 items-center">
                        <GoArrowRight className="text" />
                        <a
                          download
                          href={`https://test.uzloyal.uz/api/uploads/images/${item.src}`}
                          className="text text-[#0d6efd] duration-500 hover:text-[#2e5691]"
                        >
                          {item.category_name}
                        </a>
                      </div>
                ))
              }
              </div>
          
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Samples;
