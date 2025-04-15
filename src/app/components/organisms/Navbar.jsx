"use client"
import { useState } from "react";
import PrimaryButton from "../atoms/PrimaryButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-bold">
        <span className="text-black-500">break</span>
        <span className="text-fuchsia-600">io</span>
      </h1>

      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-fuchsia-600 focus:outline-none hover:shadow duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
      </button>

      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Explore</a>
        <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Solutions</a>
        <a href="#" className="text-black-600 hover:text-gray-600 font-bold">About</a>
        <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Blog</a>
        <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Log In</a>
        <PrimaryButton />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10 p-4 flex flex-col space-y-4">
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Explore</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Solutions</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">About</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Blog</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Log In</a>
          <PrimaryButton />
        </div>
      )}
    </nav>
  );
}
