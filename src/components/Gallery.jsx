import { GALLERY } from "../App";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6">
      <h2 className="font-display text-5xl text-center mb-16">Food Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {GALLERY.map((item, i) => (
          <div key={i} className={`overflow-hidden rounded-3xl ${item.tall ? 'row-span-2' : ''}`}>
            <img 
              src={item.img} 
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}