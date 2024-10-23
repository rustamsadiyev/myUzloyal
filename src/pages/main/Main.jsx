import React from 'react'

function Main() {
  return (
    <div>
       <div className="main">
        {/* Image */}
        <div
          className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${mainBg})` }}
        >
          <div className="text-white w-[90%] m-auto h-full flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Blogs!
            </h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="#" className="tracking-wide text-white">
                {" "}
                Home-
              </a>
              {t("Hujjat Namunalari")}
            </p>
          </div>
        </div>
        <div className="container w-[90%] m-auto h-full my-14 flex justify-between ">
          {/* Xizmatlar */}

          <div className="w-[70%]">
            {blogs.map((blog, index) => (
              <div key={index}>
                <img
                  src={`https://test.uzloyal.uz/api/uploads/images/${blog?.blog_images?.[0]?.["image.src"]}`}
                  className="w-[95%]"
                  alt="Rasm bor!"
                />
                {/* Image Details */}
                <div className="image-details my-10 space-y-6 ">
                  <div className="flex space-x-10 ">
                    <h1 className="text-gray-500 text-lg"> BY {blog.author}</h1>
                    <p>{blog.created_at}</p>
                  </div>

                  <div>
                    <h1 className="text-lg">{blog.title_en}</h1>
                  </div>
                  <div>
                    <p className="text-gray-500">KO'PROQ O'QISH...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" blog_services w-[30%]  h-[full] ">
            <div className="bg-gray-200">
              <div className="w-[80%] m-auto mt-8 pb-10 ">
                <h1 className="text-3xl font-normal py-10 ">Xizmatlar</h1>
                <ul className="">
                  {services.slice(0, 8).map((service) => (
                    <li
                      key={service.id}
                      className={`w-[90%] m-auto flex items-center mb-4 p-4 bg-white`}
                    >
                      <span className="mr-2 mt-2">
                        <FaAngleDoubleRight />
                      </span>
                      <a
                        href={`/service/${service.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {service.title_uz}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
