import { useReveal } from "../App"; // adjust if needed

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-5xl text-center mb-12">Our Story</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg leading-relaxed">
            At Zylo, we bring the rich flavors of Nigerian home cooking to your doorstep. 
            Every pot is prepared fresh daily with love, using traditional recipes passed down through generations.
          </p>
        </div>
        <div className="text-center text-7xl">🍲</div>
      </div>
    </section>
  );
}