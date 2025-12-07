"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ----- DATA: ONLY THE TWO REAL WATERLOO FACILITIES -----
const FACILITIES = [
  {
    name: "408 Albert Street, Waterloo",
    description: `
Our main DEPTH Training & Physiotherapy facility is located near the University of Waterloo & the David Johnston Research & Technology Park close to the corner of Albert & Columbia at 408 Albert Street. Located within the Waterloo Technology Park, DEPTH features a state-of-the-art fitness & rehabilitation facility including two turf areas, two weight rooms, private studio, change rooms, 8 private treatment rooms, open treatment space, sauna, and cold tub.`,
    images: ["/assets/1.jpg", "/assets/2.jpg", "/assets/1.jpg"],
  },
  {
    name: "483 Conestogo Road, Waterloo",
    description: `
Our DEPTH Youth & Team Training facility is located in north Waterloo near the Conestoga Mall close to the intersection of King & Northfield. Located above The Zone Training, DEPTH Youth & Team Training features a fully equipped fitness facility including turf field.`,
    images: ["/assets/1.jpg", "/assets/2.jpg", "/assets/1.jpg"],
  },
];

export default function FacilitiesSection() {
  const [locationIndex, setLocationIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const current = FACILITIES[locationIndex];
  const currentImages = current.images ?? [];

  const isFirst = locationIndex === 0;
  const isLast = locationIndex === FACILITIES.length - 1;

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
    setLocationIndex((prev) =>
      prev >= FACILITIES.length - 1 ? prev : prev + 1
    );
  };

  const handlePrevLocation = () => {
    setLocationIndex((prev) => (prev <= 0 ? prev : prev - 1));
  };

  return (
    <section className="w-full bg-transparent py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Heading */}
        <p className="text-center text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted)]">
          Locations
        </p>
        <h2 className="mb-10 mt-2 text-center text-3xl font-semibold text-white">
          Our High Performance Facilities
        </h2>

        {/* Card */}
        <div className="relative flex flex-col gap-10 rounded-[32px] border border-white/8 bg-[var(--depth-card)]/80 px-6 py-10 shadow-[0_22px_65px_rgba(0,0,0,0.55)] backdrop-blur-md sm:px-8 lg:flex-row lg:px-12">
          {/* Text side */}
          <div className="space-y-6 lg:w-1/2">
            <div className="flex items-center gap-3 text-lg font-medium sm:text-xl md:text-2xl">
              {/* Location icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 text-[var(--bg-primary)]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{current.name}</span>
            </div>

            <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--depth-muted)] sm:text-base">
              {current.description.trim()}
            </p>
          </div>

          {/* Image side */}
          <div className="lg:w-1/2">
            <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-2xl sm:h-[320px] md:h-[380px] lg:h-[420px]">
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
          <div className="absolute bottom-6 right-6 flex gap-4">
            <button
              type="button"
              onClick={handlePrevLocation}
              disabled={isFirst}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--depth-accent)]/40 ${
                isFirst ? "opacity-40 cursor-not-allowed" : "hover:bg-black"
              }`}
              aria-label="Previous location"
            >
              {/* Left arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="h-5 w-5"
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
              disabled={isLast}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--depth-accent)]/40 ${
                isLast ? "opacity-40 cursor-not-allowed" : "hover:bg-black"
              }`}
              aria-label="Next location"
            >
              {/* Right arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="h-5 w-5"
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
