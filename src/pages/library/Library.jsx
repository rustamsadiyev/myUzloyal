import React from 'react';
import mainBg from "/public/assets/mainImage.jpg";
import useGetData from '/public/api/api';
import { GoArrowRight } from 'react-icons/go';
import { useTranslation } from "react-i18next";

function Library() {
  const { sources } = useGetData();

  const { t, i18n } = useTranslation();


  return (
    <>
      {/* Main Background Section */}
      <div
        className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="text-white w-[90%] m-auto h-full flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
            {t("Yuridik Kutubxona")}

          </h1>
          <br />
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-gray-300 text-center">
            <a href="/main"><span className="tracking-wide text-white"> {t("home")}-</span></a>
            {t("Yuridik Kutubxona")}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#cccaca5d] py-10 shadow-md">
        <div className="myContainer w-[90%] m-auto ">
          <div className="grid lg:grid-cols-2 lg:py-10 py-6 gap-10">
            {/* First Card: Qonunlar */}
            <div className="flex md:flex-row flex-col items-start md:justify-start justify-center bg-white lg:p-8 p-4 rounded-lg md:gap-10 gap-4">
              <div className="flex justify-center items-center sm:w-auto w-full">
                <img
                  src="/public/assets/puzzleImage.svg"
                  alt="icons"
                  className="w-[50px]"
                />
              </div>
              <div>
                <h1 className="heading3 mb-3 text-[#253858] sm:text-left text-center text-3xl ">
                  Қонунлар
                </h1>
                {sources
                .slice(0,3)
                .map((value, index) => (
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

            {/* Second Card: Oliy Sud Plenum Qarorlari */}
            <div className="flex md:flex-row flex-col items-start md:justify-start justify-center bg-white lg:p-8 p-4 rounded-lg md:gap-10 gap-4">
              <div className="flex justify-center items-center sm:w-auto w-full">
                <img
                  src="/public/assets/puzzleImage.svg"
                  alt="icons"
                  className="w-[50px]"
                />
              </div>
              <div>
                <h1 className="heading3 mb-3 text-[#253858] sm:text-left text-center text-3xl">
                  Олий суд Пленум қарорлари
                </h1>
                {sources?.slice(3, 22).map((value, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <GoArrowRight className="text-[20px]" />
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
    </>
  );
}

export default Library;