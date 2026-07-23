export default function LoadingScreen({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-xl">Simmering your experience...</p>
      </div>
    </div>
  );
}