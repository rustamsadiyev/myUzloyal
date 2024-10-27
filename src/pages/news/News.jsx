import React from "react";
import mainBg from "/public/images/mainRasm.jpg";
import useGetData from "/public/api/api";
// import { FaAngleDoubleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Xizmatlar from "../../components/Xizmatlar";
import Postlar from "../../components/Postlar";

function News() {
  const { blogs = [], services = [] } = useGetData();
  const { news = [] } = useGetData();
  const { t } = useTranslation();

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
              {t("latest_news")}
            </h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="/main" className="tracking-wide text-white">
                {t("home")}- {t("news")}
              </a>{" "}
              {/* {t("Hujjat Namunalari")} */}
            </p>
          </div>
        </div>

        {/* Main Container */}
        <div className="container w-[90%] m-auto h-full my-14 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-6">
          {/* Sidebar Section */}
          <div className="w-full lg:w-[30%] space-y-16">
            {/* Services Section */}
            <Xizmatlar/>
            <Postlar/>
          </div>

          {/* news Section */}
          <div className="w-full lg:w-[70%] space-y-10">
            {news.length ? (
              news.map((item, index) => (
                <div key={index}>
                  <img
                    src={`https://test.uzloyal.uz/api/uploads/images/${item?.news_images?.[0]?.["image.src"]}`}
                    className="w-full lg:w-[95%] rounded-lg"
                    alt="Blog image"
                  />
                  {/* Image Details */}
                  <div className="image-details my-10 space-y-6">
                    <div className="flex space-x-4 text-sm md:text-base">
                      <h1 className="text-gray-500">BY {item.author}</h1>
                      <p>2023-10-05</p>
                    </div>

                    <div>
                      <h1 className="text-lg">{item.title_en}</h1>
                    </div>
                    <div>
                        
                    <a
                      href={`/news-single/${item.id}`}
                      className="text-gray-500 hover:text-blue-500 cursor-pointer"
                    >
                        KO'PROQ O'QISH...
                      
                    </a>
                    
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;