import { FAQS } from "../App";

export default function FAQ() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="font-display text-5xl text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-8">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-[var(--border)] pb-8">
            <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}