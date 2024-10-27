const items = [
  {
    id: 1,
    title: "Client",
    text: "Cameron Williamson",
  },
  {
    id: 2,
    title: "Attorney",
    text: "Darlene Robertson",
  },
  {
    id: 3,
    title: "Case",
    text: "Criminal Law",
  },
  {
    id: 4,
    title: "Case Start",
    text: "12/04/2023",
  },
  {
    id: 5,
    title: "Execution Time",
    text: "5 Months",
  },
  {
    id: 6,
    title: "Result",
    text: "Winner",
  },
];

const CaseDetails = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-y-6">
      <div className="sm:col-span-1 col-span-full">
        <div className="bg-white shadow-md rounded-lg">
          <div className="bg-[#dddddd]">
            <h3 className="heading5 lg:p-6 p-3 sm:text-left text-center">
              Case Details
            </h3>
          </div>
          <ul className="space-y-4 lg:p-6 p-3 text">
            {items.map((item) => (
              <li key={item.id}>
                <span className="font-medium">{item.title}</span>
                <span>: {item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-white shadow-md rounded-lg lg:p-6 p-3">
          <h3 className="heading3 lg:mb-4 mb-2 sm:text-left text-center">
            Summary Of The Case Studies
          </h3>
          <p className="mb-4 text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            morbi turpis ipsum cursus tempor elementum lacus. Mi ipsum, sed vel
            ultricies. Pellentesque sit tortor eu proin at commodo. Penatibus eu
            sed at tincidunt fermentum id nulla sed. Et nunc massa nam
            fringilla. In eros, proin purus, auctor arcu ultricies elit semper
            lobortis. Tristique dignissim convallis lectus morbi faucibus. Amet
            vel faucibus risus eget ante lectus faucibus. Bibendum vitae tortor
            at risus. Odio proin dictum tellus consectetur nisi egiat tellus
            augue orci nunc et sapien in. Neque at non vel tellus. Tellus urna
            sit dignissim amet. Lectus tortor at ultricies massa tortor, hac
            vitae curabitur varius.
          </p>
          <p className="text">
            Fusce etiam maecenas morbi nulla metus commodo, blandit est. Lacinia
            congue ipsum vitae in eget et. Eros, elit imperdiet ultrices
            suspendisse tellus praesent massa. Platea eros, dignissim magna
            consequat pellentesque. Suspendisse sed semper aenean proin gravida
            morbi convallis pretium velit. Sagittis risus, ut congue
            pellentesque posuere morbi vestibulum integer. Erat ut faucibus
            sollicitudin viverra egestas phasellus tristique. Nec enim tempus,
            placerat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
