import React from "react";
import useGetData from "/public/api/api";
import mainBg from "/public/images/mainRasm.jpg";
import { useTranslation } from "react-i18next";

function Services() {
  const {t} = useTranslation()
  const { services = [] } = useGetData();
  const newServices = services.slice(0, 6);
  

  return (
    <>
      <div className="main z-50 ">
        {/* Background Section */}
        <div
          className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${mainBg})` }}
        >
          <div className="text-white w-[90%] m-auto h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {t("services")}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4">
              <a href="#" className="tracking-wide text-white">
                {t("home")} - {t("services")}
              </a>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-[85%] md:w-[75%] m-auto py-8 px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-xl text-[#CDB091] sm:text-2xl md:text-3xl font-semibold">
            {t("how_we_help")}
          </h2>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-serif  mt-4 mb-10">
            {t("legal_practice_areas")}
          </h1>

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newServices.map((service, index) => (
              <div
                key={index}
                className="bg-white  p-4 rounded-lg overflow-hidden transition-shadow duration-300"
                style={{boxShadow: "0px 0px 10px "}}
              >
                <div className="w-full h-40 sm:h-48 overflow-hidden">
                  <img
                    src={`https://test.uzloyal.uz/api/uploads/images/${service.image_src}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <a href={`/service/${service.id}`} className="text-lg sm:text-3xl font-bold font-serif hover:text-[#CDB091] duration-300 text-gray-800">
                    {service.title_en}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
