import Reveal from "./Reveal";
import { FACEBOOK_URL } from "../constants";

const GALLERY_ITEMS = [
  { src: "/gallery/gallery-1.jpg", label: "Wedding Reception", ratio: "aspect-[4/5]" },
  { src: "/gallery/gallery-2.jpg", label: "Birthday Celebration", ratio: "aspect-square" },
  { src: "/gallery/gallery-3.jpg", label: "Corporate Event", ratio: "aspect-[4/3]" },
  { src: "/gallery/gallery-4.jpg", label: "Debut Celebration", ratio: "aspect-square" },
  { src: "/gallery/gallery-5.jpg", label: "Christening", ratio: "aspect-[4/5]" },
  { src: "/gallery/gallery-6.jpg", label: "House Blessing", ratio: "aspect-[4/3]" },
  { src: "/gallery/gallery-7.jpg", label: "Kiddie Party", ratio: "aspect-square" },
  { src: "/gallery/gallery-8.jpg", label: "Family Gathering", ratio: "aspect-[4/5]" },
  { src: "/gallery/gallery-9.jpg", label: "Buffet Setup", ratio: "aspect-[4/3]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-wine">
            Moments We've Made Memorable
          </h2>
        </Reveal>

        <div className="mt-12 columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.src} delay={(index % 3) * 0.08} className="mb-4 break-inside-avoid">
              <div className={`group relative ${item.ratio} rounded-xl overflow-hidden cursor-pointer`}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/60 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-semibold text-lg text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wine text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-all hover:bg-wine-dark hover:scale-[1.02]"
          >
            See More on Facebook
          </a>
        </Reveal>
      </div>
    </section>
  );
}
