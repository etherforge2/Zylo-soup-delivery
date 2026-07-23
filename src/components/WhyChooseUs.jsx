import { WHY_CHOOSE } from "../App";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-5xl text-center mb-16">Why Choose Zylo?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {WHY_CHOOSE.map((item, i) => (
            <div key={i} className="text-center p-8 rounded-2xl border border-[var(--border)]">
              <item.icon size={48} className="mx-auto mb-6 text-orange-600" />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}