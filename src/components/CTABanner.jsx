import Reveal from "./Reveal";
import { MESSENGER_URL, PORTAL_URL } from "../constants";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-wine to-wine-dark py-20 px-6 border-y-4 border-gold">
      <Reveal className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="mt-4 text-cream/85 text-lg">
          Book now and get a personalized menu and quote for your special occasion.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block bg-gold text-wine-dark font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:bg-white hover:scale-[1.02]"
          >
            Book Your Event Online
          </a>
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:text-wine-dark hover:scale-[1.02]"
          >
            Chat with Us on Messenger
          </a>
        </div>
      </Reveal>
    </section>
  );
}
