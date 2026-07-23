import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PHONE_DISPLAY, EMAIL, waLink } from "../App";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[var(--card)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl mb-6">Get In Touch</h2>
        <p className="text-xl mb-12">Ready to order? We’re just a message away.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href={PHONE_TEL} className="flex flex-col items-center gap-3 hover:text-orange-600">
            <Phone size={40} />
            <p>{PHONE_DISPLAY}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="flex flex-col items-center gap-3 hover:text-orange-600">
            <Mail size={40} />
            <p>{EMAIL}</p>
          </a>
          <div className="flex flex-col items-center gap-3">
            <MapPin size={40} />
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <a 
          href={waLink("Hi Zylo, I would like to order soup")}
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-medium"
        >
          <Send /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}