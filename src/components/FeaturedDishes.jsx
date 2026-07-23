import { FEATURED_IDS, SOUPS } from "../App";
import { ArrowRight } from "lucide-react";

export default function FeaturedDishes() {
  const featured = SOUPS.filter(s => FEATURED_IDS.includes(s.id));

  return (
    <section id="featured" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="font-display text-5xl text-center mb-12">Featured Soups</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featured.map(soup => (
          <div key={soup.id} className="rounded-3xl overflow-hidden border border-[var(--border)] group">
            <img src={soup.img} alt={soup.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{soup.name}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">{soup.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium">₦{soup.price.toLocaleString()}</span>
                <a href={waLink(`I want to order ${soup.name}`)} className="text-orange-600 flex items-center gap-1 hover:gap-2 transition-all">
                  Order <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}