"use client"
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { PiSignOutFill } from "react-icons/pi";
import { VscSignIn } from "react-icons/vsc";
import NavLink from "../NavLink";

const NavBar = () => {
  const userData = authClient.useSession();
  // console.log(usrData,  'usrData')
  const user = userData.data?.user
  // console.log(user, 'user')

 const handleSignOut = async () => {
  await authClient.signOut();
 }


  return (
    <div className="border-b px-2 sticky top-0 z-40 bg-gray-100">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/favicon.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <Link href={"/"}>
              SkillSphere
            </Link>
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm font-medium">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-courses"}>All Courses</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-5 ">
          {!user && <ul className="flex items-center  text-sm ">
            <li>
              <Link className="border py-1 px-3 rounded-4xl mr-3 
               border-purple-400 bg-purple-100 hover:bg-purple-500
                hover:text-white transform duration-200"  href={"/signup"}> 
                SignUp</Link>
                
            </li>
            <li>
              <Link className="border py-1 px-3 rounded-4xl border-purple-400
               bg-purple-100 hover:bg-purple-500 hover:text-white transform
                duration-200" href={"/login"}> LogIn</Link>
            </li>
          </ul>}

          {
            user && <div className="flex gap-4">
              <Avatar size="sm">
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" className=""  />
                <Avatar.Fallback>{user?.name [0]}</Avatar.Fallback>
              </Avatar>

             <Button size="sm" className='py-1 px-3 rounded-4xl mr-3 text-black border 
               border-purple-400 bg-purple-100 hover:bg-purple-500
                hover:text-white transform duration-200' onClick={handleSignOut}>
              SignOut
              <PiSignOutFill />
            </Button>
            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default NavBar;