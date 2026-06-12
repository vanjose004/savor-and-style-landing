import { MessageCircle, CalendarCheck } from "lucide-react";
import { MESSENGER_URL, PORTAL_URL } from "../constants";

export default function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gold text-wine-dark font-semibold py-4"
      >
        <MessageCircle size={18} />
        Message Us
      </a>
      <a
        href={PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-wine text-white font-semibold py-4"
      >
        <CalendarCheck size={18} />
        Book Now
      </a>
    </div>
  );
}
