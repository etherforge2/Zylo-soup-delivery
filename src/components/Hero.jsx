import { ArrowRight, Send } from "lucide-react";

export default function Hero({ onNav }) {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-orange-950 to-black text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="font-display text-6xl md:text-7xl leading-tight mb-6">
          Authentic Nigerian<br />Soups Delivered Hot
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300">
          Egusi, Afang, Fisherman Soup and more — made fresh daily
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNav('#menu')}
            className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-2"
          >
            View Menu <ArrowRight />
          </button>
          <a 
            href="https://wa.me/2349130193202"
            className="border border-white/60 hover:bg-white/10 px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2"
          >
            Order on WhatsApp <Send size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}