"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";

const NavBar = () => {
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/favicon.png"
            alt="logo"
            width={50}
            height={50}
            priority
          />
          <h3 className="font-black text-lg">
            Skill<span className="text-sky-600">Sphere</span>
          </h3>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-5 text-sm">
          <li><NavLink href="/">Home</NavLink></li>

          <li><NavLink href="/all-courses">All Courses</NavLink></li>

          <li><NavLink href="/my-profile">My Profile</NavLink></li>
        </ul>

        {/* Auth */}
        <ul className="flex items-center gap-3 text-sm">
          <li>
            <Link
              className="border py-1 px-3 rounded-full border-purple-400
              bg-purple-100 hover:bg-purple-500 hover:text-white
              transition duration-200"
              href="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup"  className="border py-1 px-3 rounded-full border-purple-400
              bg-purple-100 hover:bg-purple-500 hover:text-white
              transition duration-200">Sign Up</Link>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default NavBar;