"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ----- DATA: add as many locations + images as you want -----
const FACILITIES = [
  {
    name: "408 Albert Street, Waterloo",
    description: `
Our main DEPTH Training & Physiotherapy facility is located near the University of Waterloo & the David Johnston Research & Technology Park close to the corner of Albert & Columbia at 408 Albert Street. Located within the Waterloo Technology Park, DEPTH features a state-of-the-art fitness & rehabilitation facility including two turf areas, two weight rooms, private studio, change rooms, 8 private treatment rooms, open treatment space, sauna, and cold tub.`,
    images: ["/assets/1.jpg", "/assets/2.jpg", "/assets/1.jpg"],
  },
  {
    name: "Kitchener Performance Studio",
    description: `
Our Kitchener studio is designed for small-group performance training, featuring dedicated lifting platforms, sled tracks, and a recovery zone. Ideal for athletes looking for focused sessions in a high-performance environment.`,
    images: ["/assets/1.jpg", "/assets/2.jpg", "/assets/1.jpg"],
  },
  {
    name: "Cambridge Rehab & Recovery",
    description: `
The Cambridge location focuses on rehab and recovery, with treatment rooms, open-plan rehab space, and specialized equipment for post-injury return-to-play programs and guided physiotherapy sessions.`,
    images: ["/images/facilities/cambridge-1.jpg"],
  },
];

export default function FacilitiesSection() {
  const [locationIndex, setLocationIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const current = FACILITIES[locationIndex];
  const currentImages = current.images ?? [];

  // Reset photo index whenever user switches location
  useEffect(() => {
    setPhotoIndex(0);
  }, [locationIndex]);

  // Auto-carousel for images of the current location
  useEffect(() => {
    if (currentImages.length <= 1) return; // no need to auto-slide

    const id = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % currentImages.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(id);
  }, [locationIndex, currentImages.length]);

  const handleNextLocation = () => {
    setLocationIndex((prev) => (prev + 1) % FACILITIES.length);
  };

  const handlePrevLocation = () => {
    setLocationIndex((prev) => (prev === 0 ? FACILITIES.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-zinc-800 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold text-white mb-10">
          Our High Performance Facilities
        </h2>

        {/* Card */}
        <div className="relative flex flex-col lg:flex-row gap-10 rounded-2xl px-6 sm:px-8 lg:px-12 py-10">
          {/* Text side */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-medium">
              {/* <HiLocationMarker className="h-8 w-8 text-rose-500" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 text-[var(--bg-primary)]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 
       6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{current.name}</span>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-200 whitespace-pre-line">
              {current.description.trim()}
            </p>
          </div>

          {/* Image side */}
          <div className="lg:w-1/2">
            <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              {currentImages.length > 0 && (
                <Image
                  key={currentImages[photoIndex]} // key to help fade on change if you add animation
                  src={currentImages[photoIndex]}
                  alt={current.name}
                  fill
                  className="object-cover object-center"
                  priority={locationIndex === 0}
                />
              )}
            </div>
          </div>

          {/* Location navigation arrows */}
          <div className="absolute -bottom-6 right-6 flex gap-4">
            <button
              type="button"
              onClick={handlePrevLocation}
              className="h-11 w-11 rounded-full border border-[var(--bg-primary)] text-white bg-[#141414] flex items-center justify-center hover:bg-rose-500/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-label="Previous location"
            >
              {/* <HiChevronLeft className="h-6 w-6" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNextLocation}
              className="h-11 w-11 rounded-full border border-[var(--bg-primary)] text-white bg-[#141414] flex items-center justify-center hover:bg-rose-500/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-label="Next location"
            >
              {/* <HiChevronRight className="h-6 w-6" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
