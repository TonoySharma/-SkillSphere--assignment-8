"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Web Developer",
    image: "https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    title: "UI/UX Designer",
    image:
      "https://www.scotsman.com/webimg/legacy_elm_42710311.jpg?crop=3:2,smart&trim=&width=640&quality=65&enable=upscale",
   
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "Data Scientist",
    image: "https://event.foundryco.com/wp-content/uploads/sites/10/2025/07/Michael-Lee-scaled-670x670.jpg",
   
  },
  {
    id: 4,
    name: "Emma Watson",
    title: "AI Instructor",
    image:
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/09/1200/675/emma-watson-white-lace.jpg?ve=1&tl=1",

  },
];

export default function TopCards() {
  return (
    <FadeUp>
    <div className="mt-16 bg-pink-50 px-3 sm:px-4 md:px-0 p-10 ">

        <div className=" p-15">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            ✨Top Instructors
          </h1>
          <p className="text-center mt-5 text-gray-600">Upgrade your skills with guidance from the best minds in the industry.</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-15">
          {instructors.map((p) => (
            <div
              key={p.id}
              className="relative h-70 rounded-xl overflow-hidden group ">
              {/* Image */}
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-300" />
              <div
                className="absolute inset-0 bg-black/20 
              translate-y-full group-hover:translate-y-0 
              transition-transform duration-800 ease-in-out 
              flex items-end justify-center pb-6">
                <p
                  className="text-white text-sm font-semibold
                opacity-0 translate-y-5
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 delay-150">
                  {p.name}<br></br>
                  {p.title}
                </p>

              </div>
            </div>
          ))}
        </div>
    </div>
    </FadeUp>
  );
}