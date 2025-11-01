export default function AboutUs() {
  return (
    <section className="border-t border-neutral-900 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        {/* Copy (left) */}
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">About Us</h2>
          <p className="mt-4 text-neutral-300">
            Founded in Waterloo, Depth Training began as a small team of
            performance coaches with one goal: to blend athletic strength with
            evidence-based rehabilitation. Today, we’ve evolved into a leading
            multidisciplinary team helping hundreds of clients move better and
            recover faster.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300">
            <li>• Sports-science backed programming</li>
            <li>• Athlete-first coaching and individualized plans</li>
            <li>• Integrated rehab and performance under one roof</li>
          </ul>
        </div>

        {/* Image (right) — swap the src with your Figma export when ready */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-neutral-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/coach-squat.jpg"
            alt="Coach supporting athlete"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
