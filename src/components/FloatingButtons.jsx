import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="https://wa.me/2349130193202"
        className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
}