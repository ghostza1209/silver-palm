const features = [
  { name: "Storeys", description: 2 },
  {
    name: "Plot size",
    description: "368 SqM",
  },
  {
    name: "Indoor Area",
    description: "240 SqM",
  },
  {
    name: "Outdoor Area",
    description: "257 SqM",
  },
  {
    name: "Pool Size",
    description: "8 x 3 Meters",
  },
  { name: "Bedrooms", description: "3" },
  { name: "Bathrooms", description: "4" },
  { name: "Gym room", description: "1" },
  { name: "Work space", description: "1" },
  { name: "Storage room", description: "1" },
  { name: "Laundry room", description: "1" },
  {
    name: "Villa Ownership",
    description: "Company, Thai Ownership",
  },
  {
    name: "Land Ownership",
    description: "Company, Thai Ownership",
  },
  {
    name: "Furniture",
    description: "Unfurnished",
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
    <div className="relative mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-6 sm:py-11 lg:max-w-7xl lg:grid-cols-2 lg:px-8 overflow-hidden">
      {/* Ultra-luxury villa-specific abstract background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Luxury gold gradient */}
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-radial from-amber-200 to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-radial from-amber-100 to-transparent opacity-30 blur-2xl" />

        {/* Marble-like pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              linear-gradient(45deg, rgba(251, 191, 36, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px, 20px 20px",
          }}
        />

        {/* Gold dust particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-300"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -left-4 top-0 h-12 w-1 bg-gradient-to-b from-amber-400 to-amber-300"></div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 pl-2 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700 relative inline-block">
            Information
            {/* Luxury property underline animation */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-700 ease-in-out"></span>
          </span>

        </h2>
        <h3 className="mt-4 text-gray-600 font-light">
          This{" "}
          <span className="font-medium text-amber-700">modern lifestyles villa</span>{" "}
          is a 497 SqM with 3 bedrooms, and 4 bathrooms that is available for
          sale in Sri-Sunthon, Phuket, Thailand.
        </h3>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="border-t border-amber-100 pt-4 transition-all duration-300 hover:border-amber-300 group/feature relative"
            >
              {/* Luxury property feature animation */}
              <div className="absolute -left-2 top-4 w-0.5 h-0 bg-amber-400 group-hover/feature:h-full transition-all duration-500 ease-out"></div>

              <dt className="font-medium text-gray-900">
                {feature.name}
              </dt>
              <dd className="mt-2 text-sm text-amber-700 font-medium group-hover/feature:translate-x-1 transition-transform duration-300">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Property image with luxury hover effect */}
        <div className="relative group/img overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-800/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16 transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-500 z-20 flex items-end p-3">
            <span className="text-white text-sm font-medium opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 delay-200 animate-luxury-fade-in">Elegant Dining Area</span>
          </div>
          <img
            src="/images/dining-room.jpg"
            alt="Dining Room"
            className="rounded-lg bg-gray-100 shadow-lg group-hover/img:shadow-2xl transition-all duration-500 ring-1 ring-amber-100 group-hover/img:scale-105 w-full h-full object-cover"
          />
        </div>

        {/* Property image with luxury hover effect */}
        <div className="relative group/img overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-800/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16 transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-500 z-20 flex items-end p-3">
            <span className="text-white text-sm font-medium opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 delay-200 animate-luxury-fade-in">Modern Exterior Design</span>
          </div>
          <img
            src="/images/front-view_2.jpg"
            alt="Front View"
            className="rounded-lg bg-gray-100 shadow-lg group-hover/img:shadow-2xl transition-all duration-500 ring-1 ring-amber-100 group-hover/img:scale-105 w-full h-full object-cover"
          />
        </div>

        {/* Property image with luxury hover effect */}
        <div className="relative group/img overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-800/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16 transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-500 z-20 flex items-end p-3">
            <span className="text-white text-sm font-medium opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 delay-200 animate-luxury-fade-in">Private Pool with Garden View</span>
          </div>
          <img
            src="/images/pool-view_2.jpg"
            alt="Pool view of luxury villa"
            className="rounded-lg bg-gray-100 shadow-lg group-hover/img:shadow-2xl transition-all duration-500 ring-1 ring-amber-100 group-hover/img:scale-105 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
