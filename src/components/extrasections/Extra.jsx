"use client";

import React from "react";
import FadeUp from "../FadeUp";

const stats = [
  {
    id: 1,
    value: "208K",
    label: "Worldwide Students",
  },
  {
    id: 2,
    value: "250+",
    label: "Expert Mentors",
  },
  {
    id: 3,
    value: "50K",
    label: "Students Review",
  },
  {
    id: 4,
    value: "96%",
    label: "Success Rating",
  },
];

const Extra = () => {
  return (
    <FadeUp>
    <div className="bg-[#0b1c3d] py-10 px-5 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-[#0f2a5c] text-center rounded-xl py-6 shadow-md hover:scale-105 transition duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {item.value}
            </h2>
            <p className="text-sm text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    </FadeUp>
  );
};

export default Extra;