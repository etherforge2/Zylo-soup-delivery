import { onNav } from "../App"; // if needed

export default function Footer({ onNav }) {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-2xl">Z</div>
          <span className="font-display text-3xl">Zylo</span>
        </div>

        <p className="text-sm text-gray-400 mb-8">
          Authentic Nigerian Soups • Made with Love Daily
        </p>

        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Zylo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}