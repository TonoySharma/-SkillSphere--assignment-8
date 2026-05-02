import React from 'react';
import PhotoCard from '../photocard/PhotoCard';

const TopRattingCard = async () => {
  const res = await fetch('https://skill-sphere-assignment-8.vercel.app/data.json');
  const photos = await res.json();

  const topPhotos = [...photos]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="mt-10 px-3 sm:px-4 md:px-0">
      <div className='my-5'>
        <h1 className="font-bold text-3xl  text-center">
        ⭐ Top Rated Courses</h1>
        <p className="text-center mt-5 text-gray-600">Discover our highest-rated courses designed to boost your skill and career growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
        {topPhotos.map((photo,) => (
          <div key={photo.id} className="relative">
            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRattingCard;