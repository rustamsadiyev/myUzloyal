import React from 'react';
import mainBg from '/public/assets/mainImage.jpg';
import useGetData from '/public/api/api';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Xizmatlar from '../../components/Xizmatlar';
import Postlar from '../../components/Postlar';

function Blog() {
  const { blogs, services, news } = useGetData();
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Blogs!</h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="#" className="tracking-wide text-white">Home -</a>{' '}
              {t('Hujjat Namunalari')}
            </p>
          </div>
        </div>

        {/* Main Container */}
        <div className="container w-[90%] m-auto h-full my-14 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-6">
          {/* Blog Section */}
          <div className="w-full lg:w-[70%] space-y-10">
          {blogs.map((blog, index) => (
    <div key={index}>
      <img
        src={`https://test.uzloyal.uz/api/uploads/images/${blog?.blog_images?.[0]?.["image.src"]}`}
        className="w-full lg:w-[95%] rounded-lg"
        alt="Rasm bor!"
      />
      <div className="image-details my-10 space-y-6">
        <div className="flex space-x-4 text-sm md:text-base">
          <h1 className="text-gray-500">BY {blog.author}</h1>
          <p>{blog.created_at}</p>
        </div>
        <div>
          <h1 className="text-lg">{blog.title_en}</h1>
        </div>
        <div>
          <p className="text-gray-500 hover:text-blue-500 cursor-pointer">
            <Link to={`/blog-single-left-sidebar/${blog.id}`}>
              KO'PROQ O'QISH...
            </Link>
          </p>
        </div>
      </div>
    </div>
  ))}

          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-[30%] space-y-16  ">

            <Xizmatlar/>
            <Postlar/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
