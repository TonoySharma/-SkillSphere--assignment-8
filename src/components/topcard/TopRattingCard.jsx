import React from 'react';
import PhotoCard from '../photocard/PhotoCard';

const TopRattingCard = async () => {
  const res = await fetch('https://skill-sphere-assignment-8.vercel.app/data.json');
  const photos = await res.json();

  const topPhotos = [...photos]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-3xl my-5">⭐ Top Rated Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
        {topPhotos.map((photo, index) => (
          <div key={photo.id} className="relative">
            
            {/* Top badge */}
            <span className="absolute top-2 left-2 bg-yellow-400
             text-white text-xs px-2 py-1 rounded-full shadow">
              {index + 1}
            </span>

            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRattingCard;