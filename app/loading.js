export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Dış halka */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary animate-spin"></div>
        </div>

        {/* Yazı */}
        <p className="text-white text-sm tracking-wide">Preparing your recipe...</p>
      </div>
    </div>
  );
}
