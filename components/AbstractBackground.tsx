import React from "react";

interface AbstractBackgroundProps {
  className?: string;
}

const AbstractBackground: React.FC<AbstractBackgroundProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Luxury gold gradient blob */}
      <div
        className="absolute left-[calc(50%-30rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-100 opacity-30 sm:left-[calc(50%-36rem)]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />

      {/* Premium teal/blue gradient blob */}
      <div
        className="absolute right-[calc(50%-30rem)] aspect-[1155/678] w-[72.1875rem] translate-x-1/2 bg-gradient-to-tr from-teal-200 via-blue-100 to-amber-100 opacity-30 sm:right-[calc(50%-36rem)]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          transform: "rotate(180deg)",
        }}
      />

      {/* Gold accent elements */}
      <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-gradient-radial from-yellow-300 to-transparent opacity-30 blur-2xl" />
      <div className="absolute bottom-1/3 right-1/3 h-48 w-48 rounded-full bg-gradient-radial from-amber-200 to-transparent opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-radial from-amber-100 to-transparent opacity-20 blur-3xl" />

      {/* Marble-like pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to right, rgba(251, 191, 36, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251, 191, 36, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px, 20px 20px, 20px 20px",
        }}
      />

      {/* Gold dust particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-300"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AbstractBackground;
