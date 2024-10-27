import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mainBg from '/public/assets/mainImage.jpg';
import useGetData from '/public/api/api';
import { useTranslation } from 'react-i18next';
import Xizmatlar from '../../components/Xizmatlar';
import Postlar from '../../components/Postlar';

function SimilarPosts() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  
    useEffect(() => {
      fetch(`https://test.uzloyal.uz/api/news/${id}`)
        .then((response) => response.json())
        .then((data) => setNewsItem(data.data))
        .catch((error) => console.error('Error fetching news:', error));
    }, [id]);
  
  const { services, news } = useGetData();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentIndex = news ? news.findIndex(item => item.id === parseInt(id)) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/more/${news[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < news.length - 1) {
      navigate(`/more/${news[currentIndex + 1].id}`);
    }
  };

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main">
        {/* Image Section */}
        <div
          className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${mainBg})` }}
        >
          <div className="text-white w-[90%] m-auto h-full flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{t("news")}</h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="/main" className="tracking-wide text-white">{t("home")} -</a>{' '}
              {newsItem.title_en}
            </p>
          </div>
        </div>

        {/* Main Container */}
        <div className="container w-[90%] m-auto h-full my-14 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-6">


          <div className="block text-left lg:w-[70%] mx-auto px-4 md:px-10">
  <div className="flex flex-col md:flex-row md:gap-6 my-6">
    <p className="text-sm md:text-base">{newsItem.author}</p>
    <p className="text-sm md:text-base">{newsItem.created_at}</p>
  </div>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{newsItem.title_en}</h1>

  <img 
    src={`https://test.uzloyal.uz/api/uploads/images/${newsItem?.news_images?.[0]?.['image.src']}`} 
    alt={newsItem.title_en} 
    className="w-full h-auto lg:w-[50%] rounded-lg my-10" 
  />

  {/* Previous and Next Navigation */}
  <div className="w-full flex flex-col md:flex-row md:justify-between my-4">
    <div className="mb-4 md:mb-0">
      <button 
        onClick={handlePrev} 
        disabled={currentIndex <= 0} 
        className="text-blue-500 hover:underline"
      >
        Before
      </button>
    </div>
    <div>
      <button 
        onClick={handleNext} 
        disabled={currentIndex >= news.length - 1} 
        className="text-blue-500 hover:underline"
      >
        After
      </button>
    </div>
  </div>
</div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-[30%] space-y-16">

          <Xizmatlar/>
          
            {/* Similar Posts Section */}
            <Postlar/>
          </div>


        </div>
      </div>
    </>
  );
}

export default SimilarPosts;
