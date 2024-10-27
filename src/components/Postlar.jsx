import React from 'react'
import useGetData from '/public/api/api';
import { useTranslation } from 'react-i18next';


function Postlar() {

    const { blogs, services, news } = useGetData();
    const { t } = useTranslation();
  
    return (
    <>
      
            {/* Similar Posts Section */}
            <div className="bg-gray-200 rounded-md p-6 ">
              <h1 className="text-2xl lg:text-3xl font-normal py-4">{t("posts")}</h1>
              <ul className="lg:space-y-8 " >
                {news.map((item) => (
                  <li
                    key={item.id}
                    className="w-[90%] m-auto mb-4 flex flex-col items-start"
                  >
                    <a
                      href={`/news-single/${item.id}`}
                      className="text-black hover:text-yellow-900"
                    >
                      {item.title_uz}
                    </a>
                    
                    <span className="text-yellow-800 text-sm mt-1">2023-12-05</span>
                  </li>
                ))}
              </ul>
            
            </div>
    </>
  )
}

export default Postlar
