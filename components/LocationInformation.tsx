import GoogleMap from "./GoogleMap";

export default function LocationInFormation() {
  return (
    <div className="relative overflow-hidden w-full pt-10 sm:pt-24">
      <div className="flex flex-col sm:flex-row relative mx-auto max-w-7xl px-4 gap-10">
        <div className="w-full sm:w-[50%] pr-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 border-s-4 border-amber-500 pl-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
              Location
            </span>
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Silver Palm villa are ideally located on the northwest coast of
            Phuket, Thailand in Si-sunthon subdistrict. Careful consideration was taken in selecting this location,
            which is not only centrally located on the island, but strikes a
            strategic balance in favor of access to the airport, the finest
            shopping and dining, schools, entertainment, and, beaches.
          </p>
          <p className="pt-10 font-semibold">Nearby Locations</p>
          <div className="text-gray-500">
            <p>
              Porto de Phuket & Boat Avenue{" "}
              <span className="text-amber-500">9.1 km</span>
            </p>
            <p>
              Blue Tree Phuket <span className="text-amber-500">4.0 km</span>
            </p>
            <p>
              Bang Tao Beach <span className="text-amber-500">11.0 km</span>
            </p>
            <p>
              Laguna Golf Course <span className="text-amber-500">12.2 km</span>
            </p>
            <p>
              United World College Thailand (UWCT){" "}
              <span className="text-amber-500">11.5 km</span>
            </p>
            <p>
              Robinson Lifestyle Thalang{" "}
              <span className="text-amber-500">4.7 km</span>
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[50%]">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
