"use client";

import PhotoCard from '@/components/photocard/PhotoCard';
import { SearchField } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const AllCoursesPage = () => {

    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://skill-sphere-assignment-8.vercel.app/data.json');
            const data = await res.json();
            setPhotos(data);
        };
        fetchData();
    }, []);

    const filteredPhotos = photos.filter(photo =>
        photo.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-7xl mx-auto gap-4 px-4 mt-10">

                <h1 className="my-3 sm:my-5 text-2xl sm:text-3xl font-bold">
                    🔥 Popular Courses
                </h1>

                <SearchField className="border  w-full sm:w-auto mb-3 flex">
                    <SearchField.Group className="border rounded-sm px-2 focus-within:ring-0 focus-within:shadow-none">
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>

            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 sm:px-4 md:px-0 mt-6 mb-15'>
                {
                    filteredPhotos.map(photo => (
                        <PhotoCard key={photo.id} photo={photo} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;