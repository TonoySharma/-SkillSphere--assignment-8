"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcRating } from "react-icons/fc";

const PhotoCard = ({ photo }) => {
    return (
        <Card className="p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border bg-gray-100">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
                <Image
                    src={photo.image}
                    alt={photo.title}
                    width={300}
                    height={300}
                    
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {photo.title}
                </h2>

                <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-600">Instructor:</span> {photo.instructor}
                </p>

                <div className="flex items-center justify-between mt-2">
                    <p className="flex items-center gap-1 text-sm font-medium">
                        <FcRating />
                        {photo.rating}
                    </p>
                    <Link href={`all-courses/${photo.id}`}>
                        <Button
                            variant="outline"
                            className="
                            px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500
                             to-indigo-500 text-white font-medium 
                             shadow-md hover:shadow-lg hover:scale-105
                              transition-all duration-300 
                           hover:from-purple-600 hover:to-indigo-600"
                        >
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default PhotoCard;