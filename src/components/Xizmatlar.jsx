import React from 'react'
import useGetData from '/public/api/api';
import { useTranslation } from 'react-i18next';
import { FaAngleDoubleRight } from 'react-icons/fa';


function Xizmatlar() {
    
    const { blogs, services, news } = useGetData();
    const { t } = useTranslation();

  return (

    <>
                     {/* Services Section */}
                     <div className="bg-gray-200 rounded-md p-6 ">
              <h1 className="text-2xl lg:text-3xl font-normal py-4">{t("services")}</h1>
              <ul>
                {services.slice(0, 8).map((service) => (
                  <li
                    key={service.id}
                    className="w-full flex items-center mb-4 p-4 bg-white  hover:bg-yellow-700 hover:text-white rounded-md"
                  >
                    <span className="mr-2 mt-2">
                      <FaAngleDoubleRight />
                    </span>
                    <a
                      href={`/service/${service.id}`}
                      className="text-black hover:text-white  "
                    >
                      {service.title_uz}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
 
    </>
  )
}

export default Xizmatlar
