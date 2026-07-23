import { SOUPS, SWALLOWS } from "../App";

export default function FullMenu() {
  return (
    <section id="menu" className="py-20 px-6 max-w-6xl mx-auto bg-[var(--card)]">
      <h2 className="font-display text-5xl text-center mb-16">Full Menu</h2>

      <div className="mb-16">
        <h3 className="text-3xl mb-8 text-center">Signature Soups</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {SOUPS.map(soup => (
            <div key={soup.id} className="flex gap-6 p-6 rounded-2xl border border-[var(--border)]">
              <img src={soup.img} alt={soup.name} className="w-24 h-24 object-cover rounded-xl" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="text-xl font-semibold">{soup.name}</h4>
                  <span className="font-medium">₦{soup.price}</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mt-2">{soup.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl mb-8 text-center">Swallows</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {SWALLOWS.map(item => (
            <div key={item.id} className="p-6 rounded-2xl border border-[var(--border)] text-center">
              <div className="text-4xl mb-4">🍛</div>
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-orange-600 font-medium">₦{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}