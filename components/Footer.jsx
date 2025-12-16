import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-8 border-t border-white/10">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* brand */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold tracking-wide">Cheffy</h3>
          <p className="text-sm text-white/70 max-w-sm">
            Discover meals from around the world. Browse categories, cuisines and recipes.
          </p>
        </div>

        {/* explore */}
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Explore</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-primary transition">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/cuisines" className="hover:text-primary transition">
                Cuisines
              </Link>
            </li>
            <li>
              <Link href="/random" className="hover:text-primary transition">
                Random Meal
              </Link>
            </li>
          </ul>
        </div>

        {/* social links and attribution */}
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* TheMealDB Attribution */}
          <p className="text-xs text-white/50 leading-relaxed">
            Made with{" "}
            <a
              href="https://www.themealdb.com"
              target="_blank"
              className="underline hover:text-primary"
            >
              TheMealDB.com
            </a>
            <br />
            This website uses the free TheMealDB API.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center">
        made by{" "}
        <a
          href="https://github.com/sdtyrttpn"
          target="_blank"
          className="underline hover:text-primary transition"
        >
          sdtyrttpn
        </a>
      </div>
    </footer>
  );
}
