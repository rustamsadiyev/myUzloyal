import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mainBg from '/public/assets/mainImage.jpg';
import useGetData from '/public/api/api';
import { useTranslation } from 'react-i18next';
import Xizmatlar from '../../components/Xizmatlar';
import Postlar from '../../components/Postlar';

function More() {
  const { id } = useParams();  // IDni olish
  const [blog, setBlog] = useState(null);
  
  const { blogs, services, news } = useGetData();
  const { t } = useTranslation();


  useEffect(() => {
    fetch(`https://test.uzloyal.uz/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data.data))
      .catch((error) => console.error('Error fetching blog:', error));
  }, [id]);


  if (!blog) {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{t('blogs')}</h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="/main" className="tracking-wide text-white">{t('home')} -</a>{' '}
              {blog.title_en}
            </p>
          </div>
        </div>

        {/* Main Container */}
        <div className="container w-[90%] m-auto h-full my-14 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-6">

          {/* Sidebar Section */}
          <div className="w-full lg:w-[30%] space-y-16  ">
            {/* Services Section */}

            <Xizmatlar/>
            {/* Similar Posts Section */}
            <Postlar/>
            
          </div>

          <div className="block text-left lg:w-[70%] mx-auto px-4 md:px-10">
  <div className="flex flex-col md:flex-row md:gap-6 my-6">
    <p className="text-sm md:text-base">{blog.author}</p>
    <p className="text-sm md:text-base">{blog.created_at}</p>
  </div>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{blog.title_en}</h1>

  <img 
    src={`https://test.uzloyal.uz/api/uploads/images/${blog?.blog_images?.[0]?.['image.src']}`} 
    alt={blog.title_en} 
    className="w-full h-auto lg:w-[50%] rounded-lg my-10 " 
  />

  {/* Previous and Next Navigation */}
  <div className="w-full flex flex-col md:flex-row md:justify-between my-4">
    <div className="mb-4 md:mb-0 border border-gray-300 p-2 text-center">
      <button 
        className="text-blue-500 hover:underline"
      >
        Before
      </button>
    </div>
    <div className="border border-gray-300 p-2 text-center">
      <button 
        className="text-blue-500 hover:underline"
      >
        After
      </button>
    </div>
  </div>
</div>


        </div>

      </div>


    </>
  );
}

export default More;
