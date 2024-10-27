import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Sizni qiziqtirgan Savollar</h1>
      <Accordion activeIndex={activeIndex} onTabChange={(e) => toggleAccordion(e.index)}>
        
        <AccordionTab className=""
          header={
            <div 
              className={`flex items-center justify-between p-4 ${
                activeIndex === 0 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <span >Men avtomobil hodisasida jarohat olsam, nima qilishim kerak?</span>
              <span className="text-3xl">{activeIndex === 0 ? '-' : '+'}</span>
            </div>
          }
        >
          <p className="m-0 p-4 ">
            Avvalo, voqea joyida politsiyani chaqiring va hodisa yuzasidan ma'lumot oling. Keyinchalik, hodisa joyidagi barcha ishtirokchilarning ma'lumotlarini yozib oling, guvohlar bilan bog'lanish uchun raqamlarni saqlang. Bu sizning sug'urta da'vongiz uchun zarur bo'lishi mumkin.
          </p>
        </AccordionTab>

        <AccordionTab 
          header={
            <div 
              className={`flex items-center justify-between p-4 ${
                activeIndex === 1 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <span>Men mol-mulkka zarar yetkazsam, qanday jarayonlar bor?</span>
              <span className="text-3xl">{activeIndex === 1 ? '-' : '+'}</span>
            </div>
          }
        >
          <p className="m-0 p-4 ">
            Agar siz mol-mulkka zarar yetkazgan bo'lsangiz, zararni darhol egasiga yoki tegishli idoralarga xabar bering. Keyin zararni baholash uchun yetkazilgan zarar haqidagi ma'lumotlarni to'plang va sug'urta kompaniyangiz bilan bog'laning.
          </p>
        </AccordionTab>

        <AccordionTab
          header={
            <div 
              className={`flex items-center justify-between p-4 ${
                activeIndex === 2 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <span>Sud jarayonida advokat kerakmi?</span>
              <span className="text-3xl">{activeIndex === 2 ? '-' : '+'}</span>
            </div>
          }
        >
          <p className="m-0 p-4 ">
            Sud jarayonlarida advokat yollash tavsiya etiladi, chunki advokatlar huquqiy masalalarda yordam beradi va sizni sudda to'g'ri himoya qilishingiz uchun muhim. Murakkab holatlarda advokat yollash, odatda, yuridik jarayonlarda muvaffaqiyatga erishishga yordam beradi.
          </p>
        </AccordionTab>

        <AccordionTab 
          header={
            <div 
              className={`flex items-center justify-between p-4 ${
                activeIndex === 3 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <span>Jarima to'lashdan bosh tortsam nima bo'ladi?</span>
              <span className="text-3xl">{activeIndex === 3 ? '-' : '+'}</span>
            </div>
          }
        >
          <p className="m-0 p-4 ">
            Agar jarimani to'lashdan bosh tortsangiz, qo'shimcha jarimalar qo'llanilishi yoki boshqa huquqiy choralar ko'rilishi mumkin. Qonunlar qoidalarni buzgan shaxslarga nisbatan choralar ko'rishni talab qiladi, shuning uchun jarimani o'z vaqtida to'lash tavsiya etiladi.
          </p>
        </AccordionTab>

      </Accordion>
    </>
  );
}

export default Faqs;
