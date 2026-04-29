import PhotoCard from '@/components/photocard/PhotoCard';
import React from 'react';

const AllCoursesPage = async () => {
      const res = await fetch('https://skill-sphere-assignment-8.vercel.app/data.json');
  const photos = await res.json();
//   console.log(photos, 'photos');
  
    return (
        <div className=''>
            <h1 className='text-center my-5 text-3xl font-bold'>🔥 Popular Courses</h1>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    photos.map(photo => <PhotoCard key={photo.ind} photo={photo}>

                    </PhotoCard>

                    )}
            </div>
        </div>
    );
};

export default AllCoursesPage;