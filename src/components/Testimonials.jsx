import { TESTIMONIALS } from "../App";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--card)] px-6">
      <h2 className="font-display text-5xl text-center mb-16">What Our Customers Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="p-8 rounded-3xl border border-[var(--border)]">
            <Quote className="text-orange-600 mb-6" size={40} />
            <p className="italic text-lg mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-[var(--text-muted)]">{t.loc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}