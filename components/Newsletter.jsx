export default function Newsletter() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-6 px-4">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-balance break-words">
        Get fresh recipes in your inbox
      </h3>

      <p className="text-base sm:text-lg text-dark/80 text-center">
        Weekly picks, quick meals, and new categories. No spam.
      </p>

      <form className="flex w-full max-w-lg gap-2 flex-col sm:flex-row">
        <input
          type="email"
          className="min-w-0 bg-white outline outline-gray-400 shadow-sm rounded-md p-3 flex-1"
        />

        <button
          type="button"
          className="shrink-0 inline-flex items-center justify-center rounded-md bg-primary text-light px-5 py-3 font-semibold hover:bg-primary/90 transition text-center cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
