"use client";

import { FcRating } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courses = [
  {
    id: 1,
    title: "AI & Machine Learning Basics",
    category: "AI",
    students: 320,
    rating: 4.9,
    badge: "New",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
  },
  {
    id: 2,
    title: "UI/UX Design System",
    category: "Design",
    students: 850,
    rating: 4.6,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
  },
  {
    id: 3,
    title: "Cyber Security Fundamentals",
    category: "Security",
    students: 210,
    rating: 4.7,
    badge: "Just Released",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: 4,
    title: "Backend Development with Node.js",
    category: "Backend",
    students: 1100,
    rating: 4.7,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
   {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Dev",
    students: 1200,
    rating: 4.8,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "React & Next.js Mastery",
    category: "Frontend",
    students: 980,
    rating: 4.7,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 3,
    title: "UI/UX Design System",
    category: "Design",
    students: 850,
    rating: 4.6,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
  },
  {
    id: 4,
    title: "Cyber Security Fundamentals",
    category: "Security",
    students: 640,
    rating: 4.7,
    badge: "New",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: 5,
    title: "AI & Machine Learning Basics",
    category: "AI",
    students: 720,
    rating: 4.9,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
  },
];

export default function TrendingCourses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-17">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">New Releases</h2>

        <p className="text-gray-500 mt-2">
          Freshly launched courses to keep you ahead of the curve
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }} >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border h-full">
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"/>

                {/* Badge */}
                <span className="absolute top-3 right-3
                 bg-green-100 border-green-400 border text-black font-medium text-xs px-3 py-1 rounded-full ">
                  {course.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <span className="text-sm text-gray-500">
                  {course.category}
                </span>

                <h3 className="text-xl font-semibold">
                  {course.title}
                </h3>

                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>👨‍🎓 {course.students}+ Students</span>
                  <span className="flex items-center gap-1">
                    <FcRating /> {course.rating}
                  </span>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 rounded hover:opacity-90 transition cursor-not-allowed">
                  Explore Course
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}