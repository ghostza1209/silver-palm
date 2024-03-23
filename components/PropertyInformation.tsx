const features = [
  { name: "Storeys", description: 2 },
  {
    name: "Indoor Area",
    description: "244 SqM",
  },
  {
    name: "Outdoor Area",
    description: "50 SqM",
  },
  {
    name: "Pool Size",
    description: "8 x 3 Meters",
  },
  { name: "Bedrooms", description: "3" },
  { name: "Bathrooms", description: "4" },
  { name: "Gym room", description: "1" },
  { name: "Study room", description: "1" },
  { name: "Storage room", description: "1" },
  {
    name: "Villa Ownership",
    description: "Foreign Ownership",
  },
  {
    name: "Land Ownership",
    description: "Thai Ownership",
  },
  {
    name: "Furniture",
    description: "Partly Furnished",
  },
  {
    name: "CAM Fee",
    description: "No",
  },
  {
    name: "Electricity Price",
    description: "Government Rate",
  },
  {
    name: "Water Price",
    description: "Government Rate",
  },
  // {
  //   name: "Laguna",
  //   description: "10 Kilometers",
  // },
  // {
  //   name: "Robinson Lifestyle Thalang",
  //   description: "4.6 Kilometers",
  // },
];

export default function PropertyInformation() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-6 sm:py-11 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 border-s-4 border-amber-500 pl-2">
          Information
        </h2>
        <p className="mt-4 text-gray-500">
          This Villa is a 244 SqM with 3 bedrooms and 3 bathrooms that is
          available for sale in Si Sunthon, Phuket.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          src="/images/internal/p11.jpg"
          alt="Living Room"
          className="rounded-lg bg-gray-100"
        />
        <img
          src="/images/internal/p4.jpg"
          alt="Living Room"
          className="rounded-lg bg-gray-100"
        />
        <img
          src="/images/external/outside-1.jpg"
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          className="rounded-lg bg-gray-100"
        />
      </div>
    </div>
  );
}
