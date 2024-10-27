import React from "react";
import OneImage from "../../assets/one.jpg"

const CaseInfo = () => {
  return (
    <div className="lg:mt-14 grid lg:grid-cols-3 lg:gap-6">
      {/* Challenge Of Cases Section */}
      <div className="py-6">
        <h3 className="heading5 lg:mb-4 sm:text-left text-center">
          Challenge Of Cases
        </h3>
        <p className="mb-2 text">
          The types of damages that can be claimed in a personal injury suit.
          Here is a run down of some common types of damages:
        </p>
        <ul className="list-disc list-inside space-y-2 text">
          <li>Lost wages as a result of the injury</li>
          <li>Suspendisse sed semper aenean proin</li>
          <li>Pain and suffering</li>
          <li>Erat ut faucibus sollicitudin viverra egestas</li>
          <li>Compensation for medical bills accrued</li>
        </ul>
      </div>

      {/* Our Approach And Solution Section */}
      <div className="py-6">
        <h3 className="heading5 sm:text-left text-center lg:mb-4 mb-2">
          Our Approach And Solution
        </h3>
        <p className="lg:mb-4 mb-2 text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus elit
          dictumst purus cras etiam neque. Varius augue sollicitudin et proin
          elementum sed est orci. Mi aliquet neque dis elit feugiat sed.
          Ultrices sit diam viverra blandit volutpat mauris. Vitae vestibulum
          ipsum porta auctor orci. Tortor nec libero magna cursus urna rhoncus.
          Egestas eu eget sed amet aliquet. Tincidunt feugiat pretium varius
          semper sodales integer. Habitant faucibus quis tempus, amet, in nisl
          in neque, neque.
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Final Result Section */}
      <div className="py-6">
        <h3 className="heading5 lg:mb-4 mb-2 sm:text-left text-center">
          Final Result
        </h3>
        <img
          src={OneImage}
          alt="Portrait of Attorney Darlene Robertson"
          className="w-full h-auto mb-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CaseInfo;
