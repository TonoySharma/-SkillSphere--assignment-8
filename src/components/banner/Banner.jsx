"use client";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaChevronRight } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/7283630/pexels-photo-7283630.jpeg",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758873272808-5580ed7deb44?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.ibb.co/1YGJ2Zh5/jakub-zerdzicki-Lq1-Dhx-Ameok-unsplash.jpg",
  "https://i.ibb.co/XrqP2xmb/lucas-law-ec-ELcxm-JTk4-unsplash.jpg",

];

const Banner = () => {
  return (
    <div className=" overflow-hidden px-3 sm:px-4 md:px-0 max-w-7xl mx-auto ">
      <Zoom scale={1.4} indicators={true}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-full md:h-[550px] ">

            {/* Image */}
            <img
              src={img}
              alt="Slide"
              className="w-full h-full object-cover  "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Upgrade Your Skills Today
              </h1>

              <p className="text-sm md:text-lg mb-6 max-w-2xl">
                Learn from Industry Experts
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded text-white font-medium 
    bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
    hover:from-red-500 hover:to-purple-600 
    transition duration-300 shadow-lg"
                >
                  Start Learning <FaChevronRight />
                </Link>

          
                <Link
                  href="/about"
                  className="inline-flex items-center px-5 py-3 rounded font-medium 
    border border-gray-400 text-gray-500 
    hover:bg-gray-100 transition duration-300"
                >
                  Learn More
                </Link>

              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Banner;