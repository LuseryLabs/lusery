import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">My Blog</h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="" className="text-gray-400 hover:text-white">
              Contact
            </Link>
            <Link href="" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
