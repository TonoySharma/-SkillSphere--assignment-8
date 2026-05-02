"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { PiSignOutFill } from "react-icons/pi";
import NavLink from "../NavLink";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const NavBar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  console.log(user);
  

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };



  return (
    <div className="border-b px-2 sticky top-0 z-40 bg-gray-100">
      <nav className="flex justify-between items-center py-5 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image referrerPolicy="no-referrer"
            src={"/nav.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto rounded-full" />

          <h3 className="text-2xl font-bold bg-gradient-to-r via-purple-500 to-sky-500 bg-clip-text text-transparent">
            <Link href={"/"}>
              <span className="text-black">Skill</span>Sphere
            </Link>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/all-courses"}>All Courses</NavLink></li>
          <li><NavLink href={"/profile"}>My Profile</NavLink></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex gap-5 items-center">

          {!user && (
            <ul className="flex items-center text-sm">
              <li>
                <Link className="border font-medium py-3 px-5 mr-3  rounded border-gray-300 bg-gray-100 hover:bg-gray-500 hover:text-white transition" href={"/signup"}>
                 Sing Up
                </Link>
              </li>
              <li>
                <Link className="border font-medium py-3 px-4 rounded border-purple-400 text-white bg-purple-500  transition flex items-center gap-3" href={"/login"}>
                 Get Started<FaChevronRight />
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-4 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  alt="user"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
              </Avatar>

              <Button
                size="sm"
                className="py-5 px-4 rounded text-black border border-purple-300 bg-purple-100 hover:bg-purple-500 hover:text-white transition"
                onClick={handleSignOut}
              >
                Log Out <PiSignOutFill />
              </Button>
            </div>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl cursor-pointer">
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">

          <div className="flex flex-col gap-2 text-sm font-medium">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/all-courses"}>All Courses</NavLink>
            <NavLink href={"/profile"}>Profile</NavLink>
          </div>

          {!user && (
            <div className="flex gap-3 mt-3">
              <Link className="border font-medium py-1 px-3 rounded border-purple-400 bg-purple-100" href={"/signup"}>
               Sign Up
              </Link>
              <Link className="border font-medium py-1 px-3 rounded border-purple-400 flex items-center gap-3 bg-purple-500 text-white  " href={"/login"}>
                Get Started<FaChevronRight />
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                </Avatar>
                <span className="text-sm">{user?.name}</span>
              </div>

              
              <Button
                size="sm"
                className="py-5 px-4 rounded text-black border border-purple-300 bg-purple-100 hover:bg-purple-500 hover:text-white transition"
                onClick={handleSignOut}>
                Log Out <PiSignOutFill />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;