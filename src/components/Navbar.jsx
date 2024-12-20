import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Menu, Send, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

function Navbar() {
  const { t, i18n } = useTranslation();
  const [screen, setScreen] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const windowWidthHandler = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", windowWidthHandler);
    return () => {
      window.removeEventListener("resize", windowWidthHandler);
    };
  }, []);

  const handleChangeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const links = [
    { icon: <Send className="text-primary" strokeWidth={1} />, url: "https://t.me/uz_loyal" },
    { icon: <Facebook className="text-primary" strokeWidth={1} />, url: "https://www.facebook.com/people/Advokat-uzbekistan-24/61554269997134/?mibextid=ZbWKwL" },
    { icon: <Instagram className="text-primary" strokeWidth={1} />, url: "https://www.instagram.com/advokat_uzbekistan_24/" },
  ];

  const services = [
    { text: t("navbar.main"), url: "/" },
    { text: t("navbar.us"), url: "/about" },
    { text: t("navbar.cone"), url: "/contact" },
    { text: t("navbar.maq"), url: "/blog" },
  ];

  const countryFlags = [
    { name: "Uzbekistan", shortname: "uz", flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg", url: "/uz" },
    { name: "United Kingdom", shortname: "en", flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg", url: "/uk" },
    { name: "China", shortname: "cn", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", url: "/cn" },
    { name: "Russia", shortname: "ru", flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg", url: "/ru" },
    { name: "Turkey", shortname: "tur", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg", url: "/tr" },
  ];

  const menuItems = [
    { name: t("navbar.main"), url: "/" },
    { name: t("navbar.us"), url: "/about" },
    { name: t("navbar.serv"), url: "/services" },
    { name: t("navbar.maq"), url: "/articles" },
    { name: t("navbar.news"), url: "/news" },
    { name: t("navbar.cone"), url: "/contact" },
    { name: t("navbar.lib"), url: "/library" },
    { name: t("navbar.paper"), url: "/samples" },
  ];

  return (
    <>
      <header className="bg-white shadow-md left-0 w-full z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:px-0 lg:px-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.uzloyal.uz/static/media/1.a9cc2707b064ebc60743.png"
              alt="Loyal Logo"
              className="h-[90px] w-[90px]"
            />
            <div className="hidden md:flex flex-col items-start justify-between gap-3">
              <div className="flex flex-row justify-evenly gap-2">
                {links.map((e, idx) => (
                  <a key={idx} href={e.url}>
                    {e.icon}
                  </a>
                ))}
                <p className="text-[#008251] font-bold">+998 90 131 95 44</p>
              </div>
              <button className="bg-primary text-white py-1 px-5 text-sm rounded-md">
                {t("navbar.cone")}
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex flex-col items-center">
            <p className="text-xs text-[#C49A6C]">{t("navbar.mf")}</p>
            <div className="flex space-x-6">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.url} // Change to Link for internal routing
                  className="font-semibold text-lg text-black hover:text-[#008251]"
                >
                  {service.text}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-3">
            {countryFlags.map((e, idx) => (
              <img
                src={e.flag}
                alt={e.shortname}
                className="h-4 cursor-pointer"
                key={idx}
                onClick={() => handleChangeLanguage(e.shortname)}
              />
            ))}
          </div>
        </div>

        <div className="bg-primary text-white">
          {screen >= 768 ? (
            <div className="container mx-auto py-0 flex justify-evenly">
              <div className="h-full flex items-center border-b-2 border-[#008251] hover:border-yellow-500 py-5">
                <Link to="/news" className="navbarlink text-xl">
                  {t("navbar.news")}
                </Link>
              </div>
              <div className="h-full flex items-center border-b-2 border-[#008251] hover:border-yellow-500 py-5">
                <Link to="/library" className="navbarlink text-xl">
                  {t("navbar.lib")}
                </Link>
              </div>
              <div className="h-full flex items-center border-b-2 border-[#008251] hover:border-yellow-500 py-5">
                <Link to="/services" className="navbarlink text-xl">
                  {t("navbar.serv")}
                </Link>
              </div>
              <div className="h-full flex items-center border-b-2 border-[#008251] hover:border-yellow-500 py-5">
                <Link to="/samples" className="navbarlink text-xl">
                  {t("navbar.paper")}
                </Link>
              </div>
            </div>
          ) : (
            <div className="px-6 py-5">
              <button
                className="bg-[#0000007c] p-2 rounded-lg"
                onClick={() => setOpen(true)}
              >
                <Menu size={30} />
              </button>
              {open && (
                <div
                  className={`fixed top-0 left-0 max-w-[300px] min-w-[260px] bg-primary h-full w-full flex flex-col p-[9%] z-60`} // Set z-index high here
                >
                  <div className="flex flex-col items-end">
                    <button onClick={() => setOpen(false)} aria-label="Close menu">
                      <X />
                    </button>
                    <div className="flex flex-col h-[70vh] mx-auto justify-evenly items-start">
                      {menuItems.map((e, idx) => (
                        <Link to={e.url} key={idx}>
                          {e.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
