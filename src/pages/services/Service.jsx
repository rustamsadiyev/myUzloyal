import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mainBg from "/public/images/mainRasm.jpg";
import { useTranslation } from "react-i18next";
import Xizmatlar from "../../components/Xizmatlar";
import Postlar from "../../components/Postlar";
import Faqs from '../../components/Faqs';

function Service() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
    
  useEffect(() => {
    fetch(`https://test.uzloyal.uz/api/services/${id}`)
      .then((response) => response.json())
      .then((data) => setNewsItem(data.data))
      .catch((error) => console.error('Error fetching news:', error));
  }, [id]);
  
  return (
    <>
      <div className="main">
        {/* Image Section */}
        <div
          className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${mainBg})` }}
        >
          <div className="text-white w-[90%] m-auto h-full flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("news")}
            </h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="/main" className="tracking-wide text-white">
                {t("home")}- {t("news")}
              </a>
            </p>
          </div>
        </div>

        {/* Main Container */}
        <div className="container w-[90%] m-auto h-full my-14 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-6">
          {/* Sidebar Section */}
          <div className="w-full lg:w-[30%] space-y-16">
            <Xizmatlar/>
            <Postlar/>
          </div>

          {/* News Item Section */}
          <div className="w-full lg:w-[70%] space-y-10">
            {newsItem ? (
              <div>
                <img
                  src={`https://test.uzloyal.uz/api/uploads/images/${newsItem.image_src}`}
                  alt={newsItem.title_en}
                  className="w-full h-auto lg:w-[90%] rounded-lg"
                />
                
                <div className="image-details my-10 space-y-6">

                  <div>
                    <h1 className="text-2xl font-serif capitalize ">{newsItem.title_uz}</h1>
                  </div>
                  <div>
                    <p className="">
                        {newsItem.text_uz}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>No news item available</p>
            )}
            <Faqs/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
