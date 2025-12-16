export default function Header({ title }) {
  return (
    <header
      className="h-80 bg-primary flex items-center justify-center bg-cover bg-no-repeat bg-center relative "
      style={{ backgroundImage: "url('/headerBackground.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="z-20 border-2 border-light p-4 bg-dark/20 rounded-xl">
        <h1 className="font-bebas uppercase tracking-[0.35em] ps-[0.35em] text-light text-4xl sm:text-6xl md:text-7xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
