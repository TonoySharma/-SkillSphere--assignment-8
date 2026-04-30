"use client";

import { Accordion } from "@heroui/react";
import { FaBookOpen, FaClock, FaBolt } from "react-icons/fa";

export default function LearningTipsAccordion() {
  return (
    <div className="py-16 px-5 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        📘 Learning Tips for Success
      </h1>

      {/* Accordion */}
      <Accordion
        allowsMultipleExpanded
        className="w-full max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl"
      >

        {/* Study Techniques */}
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger className="flex items-center gap-3 text-lg font-semibold hover:text-blue-400 transition">
              <FaBookOpen className="text-blue-400" />
              Study Techniques
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>

          <Accordion.Panel>
            <Accordion.Body>
              <ul className="space-y-2 text-gray-200">
                <li>✔️ Active Recall - test yourself</li>
                <li>✔️ Pomodoro - 25min focus + 5min break</li>
                <li>✔️ Spaced Repetition - revise smartly</li>
                <li>✔️ Smart Note Taking</li>
              </ul>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>

        {/* Time Management */}
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger className="flex items-center gap-3 text-lg font-semibold hover:text-green-400 transition">
              <FaClock className="text-green-400" />
              Time Management
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>

          <Accordion.Panel>
            <Accordion.Body>
              <ul className="space-y-2 text-gray-200">
                <li>✔️ Plan your day</li>
                <li>✔️ Prioritize tasks</li>
                <li>✔️ Avoid multitasking</li>
                <li>✔️ Use time blocking</li>
              </ul>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}