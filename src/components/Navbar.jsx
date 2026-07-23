import { Menu, X, Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeCtx } from "../App"; // adjust path if needed

export default function Navbar({ dark, setDark, onNav }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[var(--bg)] border-b border-[var(--border)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">Z</div>
          <span className="font-display text-2xl font-semibold">Zylo</span>
        </div>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#menu" onClick={onNav} className="hover:text-orange-600 cursor-pointer">Menu</a>
          <a href="#about" onClick={onNav} className="hover:text-orange-600 cursor-pointer">About</a>
          <a href="#gallery" onClick={onNav} className="hover:text-orange-600 cursor-pointer">Gallery</a>
          <a href="#contact" onClick={onNav} className="hover:text-orange-600 cursor-pointer">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setDark(!dark)} className="p-2">
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}