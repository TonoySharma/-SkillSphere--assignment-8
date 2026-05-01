"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div className="text-center sm:text-left justify-center">
          <h2 className="text-2xl font-bold text-white">SkillSphere</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Learn modern web development, improve your skills, and build real-world projects with expert guidance.
          </p>
        </div>
        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@skillsphere.com</li>
            <li>Phone: +8801XXXXXXXXX</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-3">Social links:</h3>
          <div className="flex justify-center sm:justify-start flex-wrap gap-4 text-xl">
            <a href="#" className="hover:scale-110 transition">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaYoutube className="hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500 px-4">

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>

          <span className="hidden sm:block">|</span>

          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>

        <p className="mt-3 text-xs sm:text-sm">
          © 2026 SkillSphere. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;