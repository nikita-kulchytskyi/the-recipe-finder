"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute top-4 left-10 px-4 py-2 rounded-md border border-gray-200 text-gray-200 hover:border-gray-400 hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="Go back"
      title="Go back"
    >
      ← Back
    </button>
  );
}
