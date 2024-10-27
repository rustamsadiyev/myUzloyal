import { useState } from "react";
import { getCaseStudies } from "../../api/caseStudies";

function CaseStudies() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="lg:my-20">
      <div className="text-center lg:my-10 my-6">
        <p className="heading5 text-[#cdb091]">How Can We Assist You?</p>
        <h5 className="heading2 lg:my-3 my-1">Legal Practice Areas</h5>
        <p className="w-24 h-[1px] mx-auto bg-[#cdb091] hidden md:inline-block"></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getCaseStudies.map((study, index) => (
          <div
            key={study.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              className="w-full h-48 object-cover"
              src={study.img} // Dynamic path based on study.img
              alt={study.title}
            />
            <div className="lg:p-6 p-3">
              <h3 className="heading5 text-gray-800 mb-1">{study.title}</h3>
              <p className="text-gray-600 lg:my-4 my-1 text">
                {study.description}
              </p>
            </div>

            {hoveredCard === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <a
                  href={`/case-studies/${study.id}`}
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                >
                  View Details
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
