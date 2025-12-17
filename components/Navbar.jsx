"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Bookmark, Search, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import categoryInfo from "@/lib/api/categoryInfo";
import cuisinesInfo from "@/lib/api/cuisinesInfo";
import logo from "@/public/logo.png";
import styles from "./Navbar.module.css";
import randomMeal from "@/lib/api/randomMeal";
import searchedMeal from "@/lib/api/searchedMeal";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mainDropdown, setMainDropdown] = useState(false);
  const [categoryNames, setCategoryNames] = useState([]);
  const [cuisineNames, setCuisineNames] = useState([]);
  const [randomMealId, setRandomMealId] = useState(53143);
  const [trigger, setTrigger] = useState(0);
  const [value, setValue] = useState("");
  const router = useRouter();

  // dropdown toggle for mobile
  function toggleMainDropdown() {
    setMainDropdown((prev) => !prev);
  }

  // category names fetch
  useEffect(() => {
    async function getCategoriesData() {
      try {
        const data = await categoryInfo();
        const slicedData = data.slice(0, 8);
        setCategoryNames(slicedData.map((c) => c.categoryName));
      } catch (err) {
        console.error("Category names fetch error", err);
      }
    }
    getCategoriesData();
  }, []);

  // cuisine names fetch
  useEffect(() => {
    async function getCuisineNames() {
      try {
        const data = await cuisinesInfo();
        const slicedData = data.slice(0, 8);
        setCuisineNames(slicedData);
      } catch (err) {
        console.error("Cuisine names fetch error", err);
      }
    }
    getCuisineNames();
  }, []);

  // random meal fetch
  useEffect(() => {
    async function getRandomMealId() {
      try {
        const data = await randomMeal();
        setRandomMealId(data);
      } catch (err) {
        console.error("Random meal fetch error", err);
      }
    }
    getRandomMealId();
  }, [trigger]);

  // searched meal fetch
  async function getSearchedMeal(query) {
    if (query.trim() === "") {
      alert("Please enter a valid meal.");
      return;
    }
    try {
      const searchMealId = await searchedMeal(query.trim());
      if (searchMealId) {
        router.push(`/meals/${searchMealId}`);
        setValue("");
      } else if (!searchMealId) {
        alert("Couldnt find a meal with that name.");
        return;
      }
    } catch (err) {
      console.error("Searched meal fetch error", err);
    }
  }

  function handleSearchValue(e) {
    setValue(e.target.value);
  }

  return (
    <nav className={`sticky top-0 px-3 bg-white border-b border-b-gray-300 z-999 ${styles.nav}`}>
      <div className="container mx-auto flex items-center justify-between gap-4 h-20 lg:gap-8">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMainDropdown(false)}>
          <Image src={logo} alt="logo" className="h-12 w-12 rounded-md" priority />
          <span className="text-primary text-3xl">Cheffy</span>
        </Link>

        {/* dropdown menu */}
        <div
          id="mainDropdown"
          className={`absolute top-20 left-0 right-0 w-full text-start overflow-hidden shadow-xl transition-all duration-300 bg-white ${
            mainDropdown ? "max-h-[500px]" : "max-h-0"
          } lg:static lg:w-full lg:max-h-20 lg:shadow-none lg:items-center lg:overflow-visible`}
        >
          <div className="container mx-auto flex flex-col-reverse items-center gap-2 w-[95%] lg:flex-row lg:justify-between">
            {/* menu text links */}
            <ul className="flex flex-col gap-2 items-start w-full lg:flex-row lg:m-0">
              {/* all meals link */}
              <li className="p-0 shrink-0">
                <Link
                  href={`/meals`}
                  className={styles.nav_link}
                  onClick={() => setMainDropdown(false)}
                >
                  All Meals
                </Link>
              </li>

              {/* categories dropdown */}
              <li className={styles.nav_dropdown_title}>
                <Link
                  href="/categories"
                  className={styles.nav_link}
                  onClick={() => setMainDropdown(false)}
                >
                  Categories <ChevronDown className="w-5 hidden lg:block " />
                </Link>
                <ul
                  className={`hidden flex-col gap-2 absolute overflow-hidden bg-white border border-gray-300 rounded-md p-2 lg:flex`}
                >
                  {categoryNames.map((c, index) => (
                    <li key={index}>
                      <Link
                        href={`/categories/${encodeURIComponent(c)}`}
                        className={styles.nav_link}
                        onClick={() => setMainDropdown(false)}
                      >
                        {c}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <Link
                      href="/categories"
                      className={`${styles.nav_link} whitespace-nowrap`}
                      onClick={() => setMainDropdown(false)}
                    >
                      Explore All Categories
                    </Link>
                  </li>
                </ul>
              </li>

              {/* cuisines dropdown */}
              <li className={styles.nav_dropdown_title}>
                {/* cuisines dropdown title */}
                <Link
                  href="/cuisines"
                  className={styles.nav_link}
                  onClick={() => setMainDropdown(false)}
                >
                  Cuisines <ChevronDown className="w-5 hidden lg:block" />
                </Link>

                {/* cuisines dropdown items */}
                <ul
                  className={`hidden flex-col gap-2 absolute overflow-hidden bg-white border border-gray-300 rounded-md p-2 lg:flex`}
                >
                  {cuisineNames.map((c) => (
                    <li key={c.cuisineName}>
                      <Link
                        href={`/cuisines/${encodeURIComponent(c.cuisineName)}`}
                        className={styles.nav_link}
                        onClick={() => setMainDropdown(false)}
                      >
                        {c.cuisineName}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/cuisines"
                      className={`${styles.nav_link} whitespace-nowrap`}
                      onClick={() => setMainDropdown(false)}
                    >
                      Explore All Cuisines
                    </Link>
                  </li>
                </ul>
              </li>

              {/* random recipe link */}
              <li className="pb-4 lg:p-0">
                <Link
                  href={`/meals/${randomMealId}`}
                  className={styles.nav_link}
                  onClick={() => {
                    setTrigger((prev) => prev + 1);
                    setMainDropdown(false);
                  }}
                >
                  Random
                </Link>
              </li>
            </ul>

            {/* menu icon links */}
            <ul className="flex flex-col gap-2 items-start w-full mt-4 lg:flex-row-reverse lg:ms-auto lg:mt-0 lg:w-auto">
              {/* profile link */}
              <li>
                <Link
                  href="/"
                  className={`${styles.nav_link} flex gap-1`}
                  onClick={() => setMainDropdown(false)}
                >
                  <User className="hidden lg:block" />
                  <span className="lg:hidden">Profile</span>
                </Link>
              </li>
              {/* bookmark link */}
              <li>
                <Link
                  href="/favorites"
                  className={`${styles.nav_link} flex gap-1`}
                  onClick={() => setMainDropdown(false)}
                >
                  <Bookmark className="hidden lg:block" />
                  <span className="lg:hidden">Favorites</span>
                </Link>
              </li>

              {/* search bar */}
              <li className="relative me-2 -order-1 self-center w-[95%] lg:order-1 bg-amber-200">
                <Search
                  className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer"
                  onClick={() => {
                    setMainDropdown(false);
                    getSearchedMeal(value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Search for a recipe"
                  className="p-2 border rounded-md border-gray-600 text-dark pe-10 outline-0 w-full bg-white shrink xl:min-w-60"
                  value={value}
                  onChange={handleSearchValue}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (setMainDropdown(false), getSearchedMeal(value))
                  }
                />
              </li>
            </ul>
          </div>
        </div>

        {/* menu icon */}
        <button
          onClick={toggleMainDropdown}
          type="button"
          id="menuButton"
          className="cursor-pointer lg:hidden"
        >
          {mainDropdown ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
