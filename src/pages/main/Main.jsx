import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import useGatData from "/public/api/api";
import CountUp from "react-countup";

const Main = () => {
  const swiperRef = useRef(null);
  const newsSwiperRef = useRef(null);
  const { services = [], blogs = [], news = [] } = useGatData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "7337555984:AAHR21u09zamBEBa6aYI1Q3ZZp6oQdXsGtM";
    const id = 6236437496;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${JSON.stringify(
      formData
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    register();
    const params = {
      slidesPerView: 4,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      },
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, params);
      swiperRef.current.initialize();
    }

    if (newsSwiperRef.current) {
      Object.assign(newsSwiperRef.current, params);
      newsSwiperRef.current.initialize();
    }
  }, []);

  console.log(blogs);

  return (
    <div className="mt-52 overflow-x-hidden pb-10">
      <div className="px-4 md:px-[11%]">
        <swiper-container className="z-0" ref={swiperRef}>
          {services &&
            services.map((e, idx) => (
              <swiper-slide key={idx}>
                <div
                  onClick={() => {
                    window.location.href = `/practice-single/${e.id}`;
                  }}
                  className="w-full h-full bg-cover bg-center rounded-lg cursor-pointer z-0"
                  style={{
                    backgroundImage: `url(https://test.uzloyal.uz/api/uploads/images/${e.image_src})`,
                    aspectRatio: "1.3",
                  }}
                >
                  <div className="bg-black bg-opacity-50 text-white p-4 rounded-b-lg h-full text-center flex align-middle justify-center items-center">
                    <h1 className="text-2xl">{e.title_uz}</h1>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
      <div
        className="w-[100vw] bg-white mt-20 py-8"
        style={{ boxShadow: "0px 0px 20px " }}
      >
        <div className="flex flex-row justify-between max-w-screen-lg mx-auto px-4">
          <div className="text-center flex flex-col md:flex-row align-middle justify-center items-center">
            <h1 className="md:text-5xl text-4xl font-bold text-[#111] font-serif">
              <CountUp start={0} end={150} duration={2.5} />+
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              Ishonchli mijozlar
            </p>
          </div>
          <div className="text-center flex flex-col md:flex-row align-middle justify-center items-center">
            <h1 className="md:text-5xl text-4xl font-bold text-[#111] font-serif">
              <CountUp start={0} end={95} duration={2.5} />%
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              Yutilgan keyslar
            </p>
          </div>
          <div className="text-center flex flex-col md:flex-row align-middle justify-center items-center">
            <h1 className="md:text-5xl text-4xl font-bold text-[#111] font-serif">
              <CountUp start={0} end={20} duration={2.5} />+
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              Huquqshunoslar
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[11%] pt-14 pb">
        <div className="pb-16">
          <h1 className="text-center text-3xl text-[#CDB091]">Maqolalar</h1>
          <h1 className="bottom-line text-center text-[40px] font-serif font-bold">
            So'nggi Maqolalar
          </h1>
        </div>
        <div>
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, idx) => (
                <div key={idx} className="rounded-md ">
                  <img
                    src={`https://test.uzloyal.uz/api/uploads/images/${blog.blog_images[0]?.["image.src"]}`}
                    alt={blog.title_uz}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex flex-row align-middle justify-start gap-[5%] text-gray-500">
                      <p className="">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </p>
                      <p>{"•"}</p>
                      <p>{blog.author}</p>
                    </div>
                    <a
                      href={`/practice-single/${blog.id}`}
                      className="text-xl font-semibold"
                    >
                      {blog.title_uz}
                    </a>
                    <br />
                    <a
                      className="left-line mt-6 text-[#CDB091] text-xl"
                      href={`/practice-single/${blog.id}`}
                    >
                      Koproq bilish
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No blogs available</p>
          )}
        </div>
      </div>
      <div className="px-4 md:px-[11%] pt-14 pb-10">
        <div className="pb-16 text-center">
          <h1 className="text-3xl text-[#CDB091]">Biz haqimizda</h1>
          <h2 className="bottom-line text-[40px] font-serif font-bold">
            Nega bizni tanlashadi?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="flex-1 text-justify flex flex-col space-y-6 md:pr-32 pt-10">
            <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-800">
              Biz Sizga mukammal yordam bera oladigan eng yaxshi yuridik
              firmamiz!
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              “LOYAL” yuridik firmasi Oʻzbekiston Respublikasi boʻylab
              tadbirkorlik subʼyektlariga (xususiy tadbirkorlar, kompaniya va
              firmalar, MChJ, XAJ, barcha mulkchilik shaklidagi tashkilotlar)
              professional yuridik xizmatlar koʻrsatadi. LOYAL advokatlik
              idorasiga murojaat qilib, siz o'z huquqlaringizni himoya qilishda
              malakali tezkor yordamga va taqdim etilgan ma'lumotlarning to'liq
              maxfiyligiga ishonishingiz mumkin.
            </p>
            <p className="text-base md:text-xl text-gray-700">
              Ishingiz bilan tadbirkorlik subyektlariga yuridik xizmatlar
              ko‘rsatishga ixtisoslashgan, iqtisod va huquqni birdek yaxshi
              biladigan, tashkil etish va yuritishning barcha nozik tomonlarini
              biladigan mutaxassis shug‘ullanayotganiga doim amin bo‘lishingiz
              mumkin.
            </p>
          </div>

          <div className="flex-1 max-w-lg p-7 border">
            <img
              src="https://www.uzloyal.uz/static/media/about5.c7a5c6ee2a3c813b2015.jpg"
              alt="About Us Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[11%] pt-14 pb-10">
        <div className="pb-12">
          <h1 className="left-wall text-[#CDB091] text-3xl">Yangiliklar</h1>
          <h1 className="text-4xl font-bold font-serif">So'nggi Yangiliklar</h1>
        </div>
        <swiper-container ref={newsSwiperRef} className="mt-8">
          {news.map((newsItem, idx) => (
            <swiper-slide key={idx} className="rounded-md">
              <img
                src={`https://test.uzloyal.uz/api/uploads/images/${newsItem.news_images[0]?.["image.src"]}`}
                alt={newsItem.title_uz}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <div className="flex flex-row align-middle justify-start gap-[5%] text-gray-500">
                  <p>{new Date(newsItem.created_at).toLocaleDateString()}</p>
                  <p>{"•"}</p>
                  <p>{newsItem.author}</p>
                </div>
                <a
                  href={`/news-single/${newsItem.id}`}
                  className="text-xl font-semibold"
                >
                  {newsItem.title_uz}
                </a>
                <br />
                <a
                  className="left-line mt-6 text-[#CDB091] text-xl"
                  href={`/news-single/${newsItem.id}`}
                >
                  Koproq bilish
                </a>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="w-full flex flex-col md:flex-row px-[11%]">
        <div className="w-full md:w-1/2 bg-[#1F2937] text-white p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl mb-4">Aloqa uchun</h2>
          <p className="text-gray-300 mb-8">
            Ushbu kontaktlar orqali ko'proq ma'lumot olishingiz mumkin
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ofis Manzili</h3>
                <p className="text-gray-300">
                  Toshkent shahar, Yakkasaroy tumani, Zanjirbog' tor ko'chasi,
                  7-uy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Elektron Pochta</h3>
                <p className="text-gray-300">loyalkat@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefon raqami</h3>
                <p className="text-gray-300">+998901319544</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ish Vaqti</h3>
                <p className="text-gray-300">
                  Dushanba-Juma, 09:00 dan 18:00 gacha
                </p>
                <p className="text-gray-300">Toshkent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#B69677]  p-8 md:p-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-white text-3xl md:text-4xl mb-2">
              Biz bilan bog'lanish
            </h2>
            <h3 className="text-white text-2xl md:text-3xl mb-8">
              Konsultatsiya
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full p-3 bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Emailingiz"
                className="w-full p-3 bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                placeholder="Telefon raqamingiz"
                className="w-full p-3 bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="Muammongizni batafsil yozing"
                rows="4"
                className="w-full p-3 bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
              ></textarea>

              <button
                type="submit"
                className="px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-[#B69677] transition-colors duration-300"
              >
                Jo'natish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
