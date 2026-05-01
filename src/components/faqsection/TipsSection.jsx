"use client";

import { Accordion } from "@heroui/react";
import { FaBookOpen, FaClock } from "react-icons/fa";

export default function TipsSection() {
  return (
    <div className="mt-15 px-5 ">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide ">
        📘Learning Tips for Success
      </h1>

      {/* Accordion */}
      <Accordion
        allowsMultipleExpanded
        className="w-full max-w-4xl mx-auto backdrop-blur-lg border border-white/20 rounded-2xl p-4 bg-gray-100 ">

        {/* Study Techniques */}
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger className="flex items-center gap-3 text-2xl font-semibold transition rounded-xl">
              <FaBookOpen className="text-blue-400 " />
              Study Techniques
              <Accordion.Indicator  className=""/>
            </Accordion.Trigger>
          </Accordion.Heading>

          <Accordion.Panel>
            <Accordion.Body>
              <ul className="space-y-2 text-gray-600 text-lg">
                <li>✔️ Active Recall - test yourself</li>
                <li>✔️ Pomodoro - 25min focus + 5min break</li>
                <li>✔️ Spaced Repetition - revise smartly</li>
                <li>✔️ Smart Note Taking</li>
                    <li>✔️ Practice active recall & revision</li>
                <li>✔️ Stay consistent every day</li>
              </ul>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>

        {/* Time Management */}
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger className="flex items-center gap-3 font-semibold  transition rounded-xl text-2xl">
              <FaClock className="text-green-400" />
              Time Management
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>

          <Accordion.Panel>
            <Accordion.Body>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>✔️ Plan your day</li>
                <li>✔️ Prioritize tasks</li>
                <li>✔️ Avoid multitasking</li>
                <li>✔️ Use time blocking</li>
                <li>✔️ Use Pomodoro (25 min focus)</li>
                <li>✔️Avoid distractions (social media 🚫)</li>
            
              </ul>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}