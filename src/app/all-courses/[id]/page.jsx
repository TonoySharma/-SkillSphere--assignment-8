
import CourseCurriculum from '@/components/curriculum/CourseCurriculum';
import Image from 'next/image';
import React from 'react';
import { FcRating } from 'react-icons/fc';


const DetailsCardPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, 'photo id');

  const res = await fetch('https://skill-sphere-assignment-8.vercel.app/data.json');
  const photos = await res.json();
  // console.log(photos,  'photos');
  const photo = photos.find(p => p.id == id)
  //  console.log(photo );

  return (
    <div className=" px-3 sm:px-4 md:px-0">
        
      <div className="max-w-7xl mx-auto px-4">
        
        <div className='text-center mt-14'>
          <h1 className='font-bold text-4xl '>Course Details</h1>
          <p className="text-center mt-5 text-gray-600">A detailed breakdown of skills, lessons, and outcomes you can expect from this course</p>
        </div>

        <div className="my-12 md:my-20 flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6 text-center lg:text-left">

            {/* Title + Description */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {photo.title}
              </h1>

              <p className="text-gray-600 md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-semibold">
                {photo.description}
              </p>
            </div>

            {/* Info Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">

              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <p><span className="font-semibold">Instructor:</span> {photo.instructor}</p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <p><span className="font-semibold">Duration:</span> {photo.duration}</p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <p><span className="font-semibold">Level:</span> {photo.level}</p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <p><span className="font-semibold">Category:</span> {photo.category}</p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition flex items-center gap-2 col-span-1 sm:col-span-2">
                <span className="font-semibold">Rating:</span>
                <FcRating />
                {photo.rating}
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg ">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg group ">

              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300 " />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>

            </div>
          </div>

        </div>
      </div>


      <div>
        <CourseCurriculum></CourseCurriculum>
      </div>
    </div>
  );
};

export default DetailsCardPage;