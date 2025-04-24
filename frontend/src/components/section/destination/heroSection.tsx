import React from 'react'

export function HeroSection() {
    return (
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sunset.jpg')" }}
      >
        {/* Overlay text centered both vertically and horizontally */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-8xl capitalize text-center">
            Abri Botanica Gardens
          </h1>
        </div>
      </div>
    );
  }
  