"use client";
import { useRef } from "react";

export default function ReviewsSection() {
  const trackRef = useRef(null);

  const reviews = [
    { name: "John Smith", rating: 5, text: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made." },
    { name: "Sarah Johnson", rating: 5, text: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made." },
    { name: "Mike Brown", rating: 5, text: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made." },
    { name: "Emily Davis", rating: 5, text: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made." },
    { name: "David Lee", rating: 5, text: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made." },
    { name: "Olivia Patel", rating: 5, text: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made." },
  ];

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = 320 + 24; // card width + gap
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#2C2C2C] py-16 text-white overflow-hidden">
      <div className="relative w-screen left-1/2 -translate-x-1/2 px-6 lg:px-10">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold mb-8">Customer Review</h2>

        {/* Reviews row */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 px-2"
        >
          {reviews.map((r, i) => (
            <article
              key={i}
              className="min-w-[320px] max-w-[320px] bg-[#1E1E1E] border border-[#E43F3F] rounded-lg p-5 snap-start"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#2F2F2F] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5 opacity-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a8.25 8.25 0 1115 0v.75H4.5v-.75z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[15px] leading-none">{r.name}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#E43F3F" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.285-3.95a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.589-1.81h4.162a1 1 0 00.951-.69l1.286-3.95z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-[12.5px] leading-5">{r.text}</p>
            </article>
          ))}
        </div>

        {/* Arrows below and to the right */}
        <div className="flex justify-end mt-8 pr-6">
          <div className="flex gap-4">
            <button
              onClick={() => scrollByCard("left")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E43F3F] text-[#E43F3F] hover:bg-[#E43F3F] hover:text-white transition"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E43F3F] text-[#E43F3F] hover:bg-[#E43F3F] hover:text-white transition"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
