import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidMessageCheck } from "react-icons/bi";
import MainBg from "/public/assets/mainImage.jpg"
import { useTranslation } from "react-i18next";

const items = [
  {
    id: 1,
    icon: <MdLocationOn className="text-3xl" />,
    title: "office_address",
    text: "Bodomzor metro, Yunusobod Tuman, Tashkent City",
  },
  {
    id: 2,
    icon: <FaPhoneVolume className="text-3xl" />,
    title: "phone_number",
    text: "+998 99 311 99 99",
  },
  {
    id: 3,
    icon: <BiSolidMessageCheck className="text-3xl" />,
    title: "email_address",
    text: "nimadir@example.com",
  },
];
function Contact() {

  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const nameIs = document.getElementById("name");
  const emailIs = document.getElementById("email");
  const phoneIs = document.getElementById("phone");
  const descriptionIs = document.getElementById("description");

  const handleChange = (e) => {
    e.preventDefault();

    const sendtoken = "7341893786:AAHbohNvr9P53FUiZbESEercr1llUcpd5Bs";
    const chat_id = 5095540450;
    const url = `https://api.telegram.org/bot${sendtoken}/sendMessage`;

    const messageContent = `Your name : ${name} \nYour email : ${email} \nYour phone : ${phone} \nYour description : ${description}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageContent,
      }),
    })
      .then((resp) => resp.json())
      .then((respons) => {
        if (name.trim() === "") {
          nameIs.innerHTML = "Ismingizni kiriting";
        } else if (email.trim() === "") {
          emailIs.innerHTML = "Emailingizni kiriting";
        } else if (phone.trim() === "") {
          phoneIs.innerHTML = "Phone nomeringizni kiriting";
        } else if (description.trim() === "") {
          descriptionIs.innerHTML =
            "O'zingiz xaqingizda qisqacha ma'lumot yozing";
        } else {
          alert("Muvafaqiyatli yuborildi!...");
          nameIs.innerHTML = "";
          emailIs.innerHTML = "";
          phoneIs.innerHTML = "";
          descriptionIs.innerHTML = "";
          setName("");
          setEmail("");
          setPhone("");
          setDescription("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Xatolik yuz berdi, qaytadan urinib ko'ring!");
      });
  };

  return (
    <div className="">
              {/* Image Section */}
              <div
          className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${MainBg})` }}
        >
          <div className="text-white w-[90%] m-auto h-full flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Contact</h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="/main" className="tracking-wide text-white">Home -</a>{' '}
              {t('Hujjat Namunalari')}
            </p>
          </div>
        </div>

      <div className="myContainer">
        <div className="grid sm:grid-cols-3 gap-10 my-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="text-center lg:p-10 sm:p-6 p-4 shadow-[0_5px_15px_0_#3e419f1a]"
            >
              <div className="w-[85px] h-[85px] rounded-full mx-auto flexCenter bg-[#f5f5f5]">
                {item.icon}
              </div>
              <h2 className="heading5 lg:my-5 my-3">{item.title}</h2>
              <p className="text-[#525252] text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="xl:px-52 text-center">
          <h2 className="heading3">Have Any Question?</h2>

          <p className="text-[#525252] text md:mt-4 mt-2 md:mb-8 mb-4">
            Contact us, we will help you!
          </p>

          <form
            onSubmit={handleChange}
            className="p-10 shadow-[0_5px_15px_0_#3e419f1a] bg-white relative"
          >
            <div className="grid md:grid-cols-2 md:gap-x-5 md:gap-y-8 gap-5">
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
                />
                <span className="text-red-700 text-[14px]" id="name"></span>
              </div>

              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Your Email"
                  className="w-full pl-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
                />
                <span className="text-red-700 text-[14px]" id="email"></span>
              </div>

              <div>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  placeholder="Your Phone"
                  className="w-full pl-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
                />
                <span className="text-red-700 text-[14px]" id="phone"></span>
              </div>
            </div>

            <div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows="7"
                placeholder="Describe Your Case in Detail"
                className="w-full resize-none md:mt-8 mt-5 px-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
              ></textarea>
              <span
                className="text-red-700 text-[14px]"
                id="description"
              ></span>
            </div>

            <div className={`inline-block border text-center mt-8 border-[#cdb091]`}>
      <button
        type="submit"
        className={`w-full -translate-x-2 translate-y-[6px] text py-4 px-10 
          border text-[#cdb091] border-[#cdb091] hover:bg-[#cdb091] hover:text-white transition-all duration-500`}
      >
        Submit Now
      </button>
    </div>
          </form>
        </div>
      </div>

      <iframe
        title="das"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.513536481314!2d69.25822897587385!3d41.297690671311365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bee751faa35%3A0x5f7352be0e851c3a!2sRADIANS%20SERVICE!5e0!3m2!1sen!2s!4v1729018265254!5m2!1sen!2s"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
