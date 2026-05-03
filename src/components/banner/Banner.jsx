"use client";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/7283630/pexels-photo-7283630.jpeg",

  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",

  "https://images.unsplash.com/photo-1758873272808-5580ed7deb44",

  "https://images.unsplash.com/photo-1616587226157-48e49175ee20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1513258496099-48168024aec0",
];

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <Zoom scale={1.2} indicators={true}>
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[750px] xl:h-[850px]"
          >
            {/* Image */}
            <Image
              src={img}
              alt="Slide"
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                Upgrade Your Skills Today
              </h1>

              <p className="text-xs sm:text-sm md:text-lg mb-4 md:mb-6 max-w-xl md:max-w-2xl">
                Learn from Industry Experts
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded text-white font-medium 
                  bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
                  hover:from-red-500 hover:to-purple-600 
                  transition duration-300 shadow-lg text-sm md:text-base"
                >
                  Start Learning <FaChevronRight />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center px-4 py-2 md:px-5 md:py-3 rounded font-medium 
                  border border-gray-300 text-gray-200 
                  hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
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