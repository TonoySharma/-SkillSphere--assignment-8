"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">

      <div className="text-center max-w-md">

        {/* Big 404 */}
        <h1 className="text-[120px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition font-medium"
          >
            Go Home
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-xl border border-gray-500 hover:border-white transition"
          >
            Explore Courses
          </Link>

        </div>

        {/* Small hint */}
        <p className="text-gray-500 text-xs mt-6">
          Need help? Contact support@skillsphere.com
        </p>

      </div>
    </div>
  );
}