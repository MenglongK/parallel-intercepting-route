"use client";
import { Droplets, Mountain, Sparkles, Sun, Trees, Wind } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Mountain Peaks",
      description:
        "Majestic summits reaching towards the heavens, wrapped in eternal snow and mystery.",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Crystal Waters",
      description:
        "Pure streams flowing through valleys, reflecting the beauty of untouched wilderness.",
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Ancient Forests",
      description:
        "Dense canopies sheltering centuries-old trees, home to countless species of life.",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Gentle Breezes",
      description:
        "Soft winds carrying the whispers of nature across meadows and through valleys.",
    },
  ];

  return (
    <>
      <h3 className="md:text-4xl text-2xl text-center backdrop-blur-md bg-white/25 text-white font-semibold px-8 py-4 rounded-full border border-white/40 shadow-xl hover:shadow-2xl md:mx-30 lg:mx-80 mx-10">
        Natural Description
      </h3>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-300/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="backdrop-blur-md bg-white/20 rounded-full p-4 shadow-lg border border-white/30">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Discover Nature&apos;s Beauty
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow">
              Immerse yourself in the breathtaking wonders of the natural world,
              where every moment is a masterpiece waiting to be explored.
            </p>

            {/* Glass CTA Button */}
            <Link href="#cardView">
              <button className="backdrop-blur-md bg-white/25 hover:bg-white/35 text-white font-semibold px-8 py-4 rounded-full border border-white/40 shadow-xl transition-all duration-300 hover:scale-104 hover:shadow-2xl hover:cursor-pointer">
                Let&apos;s Explore Intercepting Routes
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Protected Areas", value: "50K+" },
              { label: "Species Documented", value: "2.5M+" },
              { label: "Natural Wonders", value: "1000+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="backdrop-blur-lg bg-white/15 rounded-2xl p-6 border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 hover:scale-104 "
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`backdrop-blur-lg bg-white/15 rounded-3xl p-8 border border-white/30 shadow-xl transition-all duration-300 ${
                  activeCard === idx ? "bg-white/25 scale-104 shadow-2xl" : ""
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`backdrop-blur-md bg-white/25 rounded-2xl p-4 border border-white/40 transition-all duration-300 ${
                      activeCard === idx ? "scale-110" : ""
                    }`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Info Card */}
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="backdrop-blur-md bg-white/30 rounded-full p-8 border border-white/40">
                  <Sun className="w-20 h-20 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Experience the Extraordinary
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  From towering mountain ranges to serene forest clearings,
                  nature offers an endless canvas of wonder. Every sunrise
                  brings new possibilities, every sunset paints the sky in
                  colors beyond imagination. Join us in celebrating and
                  protecting these precious landscapes for generations to come.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="backdrop-blur-md bg-white/25 px-4 py-2 rounded-full text-white text-sm border border-white/30">
                    Conservation
                  </span>
                  <span className="backdrop-blur-md bg-white/25 px-4 py-2 rounded-full text-white text-sm border border-white/30">
                    Exploration
                  </span>
                  <span className="backdrop-blur-md bg-white/25 px-4 py-2 rounded-full text-white text-sm border border-white/30">
                    Education
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}</style>
      </div>
    </>
  );
}
