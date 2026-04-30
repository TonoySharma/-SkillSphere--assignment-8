"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Web Developer",
    image: "https://media.baselineresearch.com/images/789608/789608_full.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Sarah Smith",
    title: "UI/UX Designer",
    image: "https://www.scotsman.com/webimg/legacy_elm_42710311.jpg?crop=3:2,smart&trim=&width=640&quality=65&enable=upscale",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "Data Scientist",
    image: "https://i.ibb.co/ZYW3VTp/teacher3.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Emma Watson",
    title: "AI Instructor",
    image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/09/1200/675/emma-watson-white-lace.jpg?ve=1&tl=1",
    rating: 4.9,
  },
];

export default function TopCards() {
  return (
    <div className="py-16 px-5 bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
         Top Instructors
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">

        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={ins.image}
                alt={ins.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{ins.name}</h2>
              <p className="text-sm text-gray-500">{ins.title}</p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
                <FaStar />
                <span className="text-sm text-gray-600">{ins.rating}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}