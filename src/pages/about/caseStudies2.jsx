import React, { useState } from "react";
import criminal from "../../assets/judgement4.webp"
import family from "../../assets/judgement5.jpg"
import business from "../../assets/judgement6.jpg"

function Cases() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      description: "Brief description of the case study.",
      img: criminal,
    },
    {
      id: 2,
      title: "Case Study 2",
      description: "Brief description of the case study.",
      img: family,
    },
    {
      id: 3,
      title: "Case Study 3",
      description: "Brief description of the case study.",
      img: business,
    },
  ];

  return (
    <section className="lg:py-16 py-4 my-10">
      <div>
        <div className="text-center lg:mb-12 mb-6">
          <h2 className="heading3 text-gray-800 lg:mb-4 mb-2">
            Our Case Studies
          </h2>
          <p className="text text-gray-600">
            See how we've helped clients achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                className="w-full h-48 object-cover"
                src={study.img}
                alt={study.title}
              />
              <div className="lg:p-6 p-3">
                <h3 className="heading5 text-gray-800 lg:mb-3 mb-1">
                  {study.title}
                </h3>
                <p className="text-gray-600 lg:mb-4 mb-2 text">
                  {study.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
