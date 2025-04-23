"use client";

import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const floorPlans = [
  {
    name: "1st Floor",
    image: "/images/floorplan-1st-floor.jpg",
    details: "Living area, Kitchen, Dining, Pool access",
  },
  {
    name: "2nd Floor",
    image: "/images/floorplan-2nd-floor.jpg",
    details: "3 Bedrooms, 3 Bathrooms",
  },
];

const FloorPlan = () => {
  const [selectedFloor, setSelectedFloor] = useState(0);

  return (
    <div className="relative mx-auto max-w-7xl pt-10 px-4 sm:px-6 overflow-hidden">
      {/* Background effects matching PropertyInformation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-radial from-amber-200 to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-radial from-amber-100 to-transparent opacity-30 blur-2xl" />
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
      </div>

      {/* Section Header with blueprint animation */}
      <div className="relative mb-10 group">
        <div className="absolute -left-4 top-0 h-12 w-1 bg-gradient-to-b from-amber-400 to-amber-300"></div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 pl-2 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700 relative inline-block">
            Floor Plans
            {/* Blueprint underline animation */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-700 ease-in-out"></span>
          </span>

        </h2>
      </div>

      {/* Floor Selection with key animation */}
      <div className="flex gap-4 mb-6">
        {floorPlans.map((floor, index) => (
          <button
            key={floor.name}
            onClick={() => {
              setSelectedFloor(index);
            }}
            className={`px-4 py-2 rounded-lg transition-all relative group/btn flex items-center ${
              selectedFloor === index
                ? "bg-amber-500 text-white shadow-lg"
                : "bg-amber-50 text-amber-700 hover:bg-amber-100"
            }`}
          >

            {floor.name}

            {/* Subtle hover effect */}
            {selectedFloor !== index && (
              <span className="absolute inset-0 rounded-lg bg-amber-200 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></span>
            )}
          </button>
        ))}
      </div>

      {/* Floor Plan Viewer with blueprint animation */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6 relative overflow-hidden group/blueprint">
        {/* Blueprint scan animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-amber-200/10 pointer-events-none animate-blueprint-scan z-10"></div>

        {/* Blueprint grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}>
        </div>



        <TransformComponent>
          <div className="relative">


            <img
              src={floorPlans[selectedFloor].image}
              alt={`${floorPlans[selectedFloor].name} floor plan`}
              className="w-full h-auto relative z-0"
            />
          </div>
        </TransformComponent>
      </div>

      {/* Floor Details */}
      {/* <div className="bg-amber-50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-amber-700 mb-2">
          {floorPlans[selectedFloor].name}
        </h3>
        <p className="text-amber-600">{floorPlans[selectedFloor].details}</p>
      </div> */}
    </div>
  );
};

export default function FloorPlanWrapper() {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={1}
      maxScale={4}
      centerOnInit={true}
    >
      <FloorPlan />
    </TransformWrapper>
  );
}
