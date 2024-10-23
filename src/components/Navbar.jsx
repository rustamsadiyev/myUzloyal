import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Menu, Send, X } from "lucide-react";

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
    console.log(selectedLanguage);
  };

  const links = [
    {
      icon: <Send className="text-primary" strokeWidth={1} />,
      url: "https://t.me/uz_loyal",
    },
    {
      icon: <Facebook className="text-primary" strokeWidth={1} />,
      url: "https://www.facebook.com/people/Advokat-uzbekistan-24/61554269997134/?mibextid=ZbWKwL",
    },
    {
      icon: <Instagram className="text-primary" strokeWidth={1} />,
      url: "https://www.instagram.com/advokat_uzbekistan_24/",
    },
  ];

  const services = [
    { text: t("navbar.main"), url: "home" },
    { text: t("navbar.us"), url: "about" },
    { text: t("navbar.cone"), url: "contact" },
    { text: t("navbar.maq"), url: "publications" },
  ];

  const countryFlags = [
    // (flags data remains unchanged)
  ];
  
  const menuItems = [
    { name: t("navbar.main"), url: "/" },
    { name: t("navbar.us"), url: "/about" },
    { name: t("navbar.serv"), url: "/services" },
    { name: t("navbar.maq"), url: "/articles" },
    { name: t("navbar.news"), url: "/news" },
    { name: t("navbar.cone"), url: "/contact" },
    { name: t("navbar.lib"), url: "/library" },
  ];

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:px-0 lg:px-8">
          {/* Logo and Contact */}
          <div className="flex items-center space-x-4">
            <img
              src="https://www.uzloyal.uz/static/media/1.a9cc2707b064ebc60743.png"
              alt="Loyal Logo"
              className="h-[90px] w-[90px]"
            />
            <div className="hidden md:flex flex-col items-start justify-between gap-3">
              <div className="flex flex-row items-center justify-evenly gap-2">
                {links.map((e, idx) => (
                  <a key={idx} href={e.url}>
                    {e.icon}
                  </a>
                ))}
                <p className="text-[#008251] font-bold">+998 90 131 95 44</p>
              </div>
              <button className="bg-primary text-white py-2 px-5 text-sm rounded-md">
                {t("navbar.cons")}
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex flex-col items-center justify-between gap-2">
            <p className="text-xs text-[#C49A6C]">{t("navbar.mf")}</p>
            <div className="flex flex-row justify-between space-x-6">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={`/services/${service.url}`}
                  className="font-semibold text-lg text-black hover:text-[#008251]"
                >
                  {service.text}
                </a>
              ))}
            </div>
          </nav>

          {/* Language Icons and Other Elements */}
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

        {/* Sub Navigation */}
        <div className="bg-primary text-white">
          {screen >= 768 ? (
            <div className="container mx-auto py-0 flex justify-evenly">
              <div className="flex flex-col items-center justify-center border-b-2 border-[#008251] py-5 hover:border-yellow-400 transition-colors duration-300">
                <a href="/news" className="navbarlink text-xl">
                  {t("navbar.news")}
                </a>
              </div>
              <div className="flex flex-col items-center justify-center border-b-2 border-[#008251] py-5 hover:border-yellow-400 transition-colors duration-300">
                <a href="/library" className="navbarlink text-xl">
                  {t("navbar.lib")}
                </a>
              </div>
              <div className="flex flex-col items-center justify-center border-b-2 border-[#008251] py-5 hover:border-yellow-400 transition-colors duration-300">
                <a href="/services" className="navbarlink text-xl">
                  {t("navbar.serv")}
                </a>
              </div>
              <div className="flex flex-col items-center justify-center border-b-2 border-[#008251] py-5 hover:border-yellow-400 transition-colors duration-300">
                <a href="/documents" className="navbarlink text-xl">
                  {t("navbar.paper")}
                </a>
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
              <div
                className={`fixed top-0 left-0 max-w-[300px] min-w-[260px] bg-primary h-full w-full flex flex-col p-[9%] transition-transform duration-300 ${
                  open ? 'animate-open' : 'animate-close'
                }`}
              >
                <div className="flex flex-col items-end">
                  <button onClick={() => setOpen(false)}>
                    <X />
                  </button>
                  <div className="flex flex-col h-[70vh] mx-auto justify-evenly items-start ">
                    {menuItems.map((e, idx) => (
                      <a href={e.url} className="text-white" key={idx}>
                        {e.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
