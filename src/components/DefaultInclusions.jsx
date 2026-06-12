import { Armchair, Utensils, ConciergeBell, GlassWater } from "lucide-react";
import Reveal from "./Reveal";
import { MESSENGER_URL } from "../constants";

const INCLUSIONS = [
  { icon: Armchair, title: "Tables and Chairs with Cloths" },
  { icon: Utensils, title: "Complete Flatware and Silverwares" },
  { icon: ConciergeBell, title: "Waiter Service and Food Servers" },
  { icon: GlassWater, title: "Water and Ice" },
];

export default function DefaultInclusions() {
  return (
    <section className="bg-wine py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Every Package Includes
          </h2>
          <p className="mt-3 text-cream/80 text-lg">
            No hidden charges — these come with every booking
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INCLUSIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="h-full bg-white/10 border border-gold/30 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-gold text-wine-dark">
                    <Icon size={30} />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12" delay={0.2}>
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-wine-dark font-semibold px-8 py-3.5 rounded-full shadow-md transition-all hover:bg-white hover:scale-[1.02]"
          >
            Get a Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}
