import React from "react";

const CanvaPresentation = () => {
  return (
    <section className="w-full mt-10 py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f3f4f6_0%,_transparent_60%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#e5e7eb_0%,_transparent_60%)] opacity-70" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Project Presentation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our detailed project showcase through this interactive
            presentation
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full ring-1 ring-gray-200 rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.canva.com/design/DAGjvfjqaoc/iCL6qmpW-YkPpjSOUN1PUQ/view?embed"
            className="w-full h-full"
            allowFullScreen
            allow="fullscreen"
          />
        </div>
      </div>
    </section>
  );
};

export default CanvaPresentation;
