"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import EmojiScroller from "@/components/EmojiBar";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(Boolean(query || cuisine || maxTime));
  }, [query, cuisine, maxTime]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (cuisine) params.append("cuisine", cuisine);
    if (maxTime) params.append("maxReadyTime", maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <main className="flex flex-col items-center py-8 space-y-8 ">
      <EmojiScroller className="w-full 2xl:flex 2xl:justify-center " />
      <div className="w-full max-w-6xl text-stone-800">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Find Your Perfect Recipe
        </h1>

        <div className="flex flex-col md:flex-row items-center px-4 gap-4 my-10">
          <input
            type="text"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-lg px-4 py-3 min-w-[300px] rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="flex-2 text-lg px-4 py-4 min-w-[300px] rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 ${cuisine ? 'color-grey' : ''}"
          >
            <option value="">Cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
          </select>

          <input
            type="number"
            placeholder="Max time (min)"
            value={maxTime}
            min={0}
            onChange={(e) => setMaxTime(e.target.value)}
            className="flex-1 text-lg px-4 py-3 min-w-[300px] rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="text-center">
          <button
            disabled={!isFormValid}
            onClick={handleSearch}
            className={`text-xl px-8 py-3 rounded-lg font-semibold text-white transition ${
              isFormValid
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}
