"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


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

const AUTO_SLIDE_INTERVAL = 5000; 

export default function TrainingPictureSection() {
  const [locationIndex, setLocationIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const current = FACILITIES[locationIndex];
  const currentImages = current.images ?? [];

  
  useEffect(() => {
    setPhotoIndex(0);
  }, [locationIndex]);

  
  useEffect(() => {
    if (currentImages.length <= 1) return;

    const id = setInterval(
      () =>
        setPhotoIndex((prev) => (prev + 1) % currentImages.length),
      AUTO_SLIDE_INTERVAL
    );

    return () => clearInterval(id);
  }, [locationIndex, currentImages.length]);

  const nextLocation = () =>
    setLocationIndex((prev) => (prev + 1) % FACILITIES.length);

  const prevLocation = () =>
    setLocationIndex((prev) =>
      prev === 0 ? FACILITIES.length - 1 : prev - 1
    );

  return (
    <section className="w-full bg-transparent py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        
        <p className="text-center text-[12px] uppercase tracking-[0.35em] text-[var(--depth-muted)]">
          Facilities
        </p>
        <h2 className="mb-10 mt-2 text-center text-3xl font-semibold">
          Our High Performance Facilities
        </h2>

        
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-black/70 to-black/95 shadow-[0_22px_65px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="relative h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px]">
            {currentImages.length > 0 && (
              <Image
                key={currentImages[photoIndex]}
                src={currentImages[photoIndex]}
                alt={current.name}
                fill
                className="object-cover object-center transition-all"
                priority={locationIndex === 0}
              />
            )}

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-6 pb-6 sm:px-10 lg:px-12">
              <div className="flex items-center gap-3 text-base font-medium sm:text-lg md:text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-6 w-6 text-[var(--bg-primary)]"
                >
                  <path d="M10 2a6 6 0 00-6 6c0 4.4 6 10 6 10s6-5.6 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                <span>{current.name}</span>
              </div>

              <p className="max-w-3xl text-xs leading-relaxed text-white/80 sm:text-sm md:text-base line-clamp-4 sm:line-clamp-5">
                {current.description.trim()}
              </p>
            </div>

            
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {currentImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPhotoIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    photoIndex === index
                      ? "w-5 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-5 right-5 flex gap-3">
            <button
              onClick={prevLocation}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-md transition hover:bg-black/85"
              aria-label="Previous facility"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextLocation}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-md transition hover:bg-black/85"
              aria-label="Next facility"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
