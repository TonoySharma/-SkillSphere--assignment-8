import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcRating } from 'react-icons/fc';


const DetailsCardPage = async ({params}) => {
    const {id} = await params;
    // console.log(id, 'photo id');

    const res = await fetch('https://skill-sphere-assignment-8.vercel.app/data.json');
  const photos = await res.json();
    // console.log(photos,  'photos');
    const photo = photos.find(p => p.id == id)
    //  console.log(photo );
    
    return (
      <div className=" mt-5 flex justify-center px-3 sm:px-4 md:px-0 mb-5">
      <Card className="p-5 border bg-gray-100 rounded-xl shadow-md w-[650px]
       hover:shadow-lg transition-all duration-300 ">
        {/* Image */}
        <div className="relative w-full h-[300px] mb-4">
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">
          {photo.title}
        </h1>
        <p className="text-gray-600 mb-3">
          {photo.description}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-semibold">Instructor:</span> {photo.instructor}</p>
          <p><span className="font-semibold">Duration:</span> {photo.duration}</p>
          <p><span className="font-semibold">Level:</span> {photo.level}</p>
          <p><span className="font-semibold">Category:</span> {photo.category}</p>
          <p className=' flex items-center gap-1'><span className="font-semibold">Rating:</span>  <FcRating />{photo.rating}</p>
        </div>

      </Card>
    </div>
    );
};

export default DetailsCardPage;