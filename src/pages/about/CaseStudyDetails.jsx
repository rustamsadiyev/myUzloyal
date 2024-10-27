import React from "react";
import CaseStudies from "./caseStudies2";
import CaseDetails from "./caseDetails";
import CaseAttorney from "./CaseAttorney";
import CaseInfo from "./CaseInfo";
import OneImage from "../../assets/service13.jpeg"
import mainBg from '/public/assets/mainImage.jpg';
import { useTranslation } from 'react-i18next';


function CaseStudyDetails() {
  const { t } = useTranslation();
  return (
    <div className="">
      {/*     Background image    */}
      {/* <BackgroundofPages
        heading={"Latest Articles"}
        text={"Our publications"}
      /> */}

      <section className="myContainer sm:max-md:my-6 md:max-lg:my-2">
      <div
          className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${mainBg})` }}
        >
          <div className=" text-white w-[90%] m-auto h-full flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Blogs!</h1>
            <br />
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              <a href="#" className="tracking-wide text-white">Home -</a>{' '}
              {t('Hujjat Namunalari')}
            </p>
          </div>
        </div><br />

        <div>
          
          <div className="text-center">
            <h3 className="heading3 lg:mb-4 sm:mb-2">
              A Personal Injury Suit Can Arise When Someone Is Harmedd
            </h3>
            <span className="text-gray-600 text">
              Case Study, Insurance Law, Law Firm
            </span>
          </div>
          <div className="mb-6 h-[60vh] w-[100%] ">
            <img
              src={OneImage}
              alt="Personal Injury Case Study"
              className="w-[90%] m-auto h-full rounded-lg lg:my-10 sm:my-6 my-3"
            />
          </div>
          {/* Include other case components here */}
          <CaseDetails />
          <CaseInfo />
          <CaseAttorney />
          <CaseStudies />
        </div>
      </section>
    </div>
  );
}

export default CaseStudyDetails;
