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

      {/* Section Header */}
      <div className="relative mb-10">
        <div className="absolute -left-4 top-0 h-12 w-1 bg-gradient-to-b from-amber-400 to-amber-300"></div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 pl-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
            Floor Plans
          </span>
        </h2>
      </div>

      {/* Floor Selection */}
      <div className="flex gap-4 mb-6">
        {floorPlans.map((floor, index) => (
          <button
            key={floor.name}
            onClick={() => {
              setSelectedFloor(index);
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedFloor === index
                ? "bg-amber-500 text-white shadow-lg"
                : "bg-amber-50 text-amber-700 hover:bg-amber-100"
            }`}
          >
            {floor.name}
          </button>
        ))}
      </div>

      {/* Floor Plan Viewer */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
        <>
          {/* <div className="flex gap-2 mb-4">
                <button
                  onClick={() => zoomIn()}
                  className="p-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100"
                >
                  Zoom In
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="p-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100"
                >
                  Zoom Out
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="p-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100"
                >
                  Reset
                </button>
              </div> */}
          <TransformComponent>
            <img
              src={floorPlans[selectedFloor].image}
              alt={`${floorPlans[selectedFloor].name} floor plan`}
              className="w-full h-auto"
            />
          </TransformComponent>
        </>
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
