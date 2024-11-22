import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Book } from './Book';
import devtagensets from '../resource/devtagensets1.png';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-16 sticky top-0 z-50 w-screen bg-black shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src={devtagensets}
              alt="Devta Gensets Logo"
              className="h-8 sm:h-8 md:h-12 lg:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-sm sm:text-base items-center font-semibold text-white ml-auto">
          <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
          <Link to="/service" className="hover:text-cyan-500 transition duration-300">Service</Link>
          <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300 whitespace-nowrap">
            Contact Us
          </Link>
        </div>

        {/* Social Icons and Call Section */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-2">
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/devtagensets" className="text-blue-600 text-xl hover:text-blue-800 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/devtagensets" className="text-blue-600 text-xl hover:text-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/devtagensets" className="text-pink-500 text-xl hover:text-pink-700 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/devta-gensets-private-limited" className="text-blue-700 text-xl hover:text-blue-900 transition">
              <FaLinkedinIn />
            </a>
          </div>
          <Book />
          <a
            href="tel:+919999966177"
            className="flex items-center text-green-500 text-base sm:text-lg hover:text-green-700 transition gap-2"
          >
            <FaPhoneAlt />
            <span className="whitespace-nowrap">Call +91-9999966177</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-4 gap-3">
          <Link
            to="/"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/service"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/contactUs"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Book />
          <a
            href="tel:+919999966177"
            className="flex items-center text-green-500 text-lg hover:text-green-700 transition gap-2"
          >
            <FaPhoneAlt />
            <span className="font-medium">Call +91-9999966177</span>
          </a>
        </div>
      )}
    </div>
  );
};


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";
// import devtagensets from "../resource/devtagensets.png";

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-18 sticky top-0 z-50 w-screen bg-black shadow-md">
//       {/* Navbar Container */}
//       <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <Link to="/" className="flex items-center">
//             <img
//               src={devtagensets}
//               alt="Devta Gensets Logo"
//               className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
//             />
//           </Link>
//         </div>

//         {/* Desktop Links Section */}
//         <div className="hidden md:flex gap-6 lg:gap-10 text-sm sm:text-lg items-center font-semibold text-white ml-auto">
//           <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
//           <Link to="/service" className="hover:text-cyan-500 transition duration-300">Service</Link>
//           <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300">Contact Us</Link>
//         </div>

//         {/* Social Icons and Call Section */}
//         <div className="hidden md:flex items-center gap-4">
//           <div className="flex items-center gap-3">
//             <a href="https://www.facebook.com/devtagensets" className="text-blue-600 text-xl hover:text-blue-800 transition">
//               <FaFacebookF />
//             </a>
//             <a href="https://twitter.com/devtagensets" className="text-blue-600 text-xl hover:text-blue-600 transition">
//               <FaTwitter />
//             </a>
//             <a href="https://instagram.com/devtagensets" className="text-pink-500 text-xl hover:text-pink-700 transition">
//               <FaInstagram />
//             </a>
//             <a href="https://linkedin.com/company/devtagensets" className="text-blue-700 text-xl hover:text-blue-900 transition">
//               <FaLinkedinIn />
//             </a>
//           </div>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-base sm:text-lg hover:text-green-700 transition gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-4 gap-4">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/service" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Service</Link>
//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />

//           {/* Social Icons and Call Section for Small Screens */}
//           <div className="flex flex-col items-center gap-3">
//             <div className="flex gap-3">
//               <a href="https://www.facebook.com/devtagensets" className="text-blue-600 text-xl hover:text-blue-800 transition">
//                 <FaFacebookF />
//               </a>
//               <a href="https://twitter.com/devtagensets" className="text-blue-600 text-xl hover:text-blue-600 transition">
//                 <FaTwitter />
//               </a>
//               <a href="https://instagram.com/devtagensets" className="text-pink-500 text-xl hover:text-pink-700 transition">
//                 <FaInstagram />
//               </a>
//               <a href="https://linkedin.com/company/devtagensets" className="text-blue-700 text-xl hover:text-blue-900 transition">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//             <a href="tel:+919999966177" className="flex items-center text-green-500 text-lg hover:text-green-700 transition mt-2 gap-2">
//               <FaPhoneAlt />
//               <span>Call +91-9999966177</span>
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";
// import devtagensets from "../resource/devtagensets.png";

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-18 sticky top-0 z-50 w-screen bg-black shadow-md">
//       {/* Navbar Container */}
//       <div className="flex flex-wrap items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <Link to="/" className="flex items-center">
//             <img
//               src={devtagensets} // Replace with the actual path to your logo
//               alt="Devta Gensets Logo"
//               className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" // Responsive sizing
//             />
//           </Link>
//         </div>

//         {/* Desktop Links Section */}
//         <div className="hidden md:flex gap-6 lg:gap-10 text-lg items-center font-semibold text-white ml-auto">
//           <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
//           <Link to="/service" className="hover:text-cyan-500 transition duration-300">Service</Link>
//           <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300">Contact Us</Link>
//         </div>

//         {/* Social Icons and Call Section */}
//         <div className="hidden md:flex items-center gap-4 ml-4">
//           <a href="https://www.facebook.com/devtagensets" className="text-blue-600 text-2xl hover:text-blue-800 transition">
//             <FaFacebookF />
//           </a>
//           <a href="https://twitter.com/devtagensets" className="text-blue-600 text-2xl hover:text-blue-600 transition">
//             <FaTwitter />
//           </a>
//           <a href="https://instagram.com/devtagensets" className="text-pink-500 text-2xl hover:text-pink-700 transition">
//             <FaInstagram />
//           </a>
//           <a href="https://linkedin.com/company/devtagensets" className="text-blue-700 text-2xl hover:text-blue-900 transition">
//             <FaLinkedinIn />
//           </a>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-2 gap-2">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/service" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Service</Link>
//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition mt-2 gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-18 sticky top-0 z-50 w-screen bg-black shadow-md">
//       {/* Navbar Container */}
//       <div className="flex flex-wrap items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <Link
//             to="/"
//             className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white"
//           >
//             Devta Gensets Pvt Ltd
//           </Link>
//         </div>

//         {/* Desktop Links Section */}
//         <div className="hidden md:flex gap-6 lg:gap-10 text-lg items-center font-semibold text-white ml-auto">
//           <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
//           <Link to="/service" className="hover:text-cyan-500 transition duration-300">Service</Link>
//           <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300">Contact Us</Link>
//         </div>

//         {/* Social Icons and Call Section */}
//         <div className="hidden md:flex items-center gap-4 ml-4">
//           <a href="hhttps://www.linkedin.com/company/devta-gensets-private-limited/about/" className="text-blue-600 text-2xl hover:text-blue-800 transition">
//             <FaFacebookF />
//           </a>
//           <a href="https://www.linkedin.com/company/devta-gensets-private-limited/about/" className="text-blue-600 text-2xl hover:text-blue-600 transition">
//             <FaTwitter />
//           </a>
//           <a href="https://www.linkedin.com/company/devta-gensets-private-limited/about/" className="text-pink-500 text-2xl hover:text-pink-700 transition">
//             <FaInstagram />
//           </a>
//           <a href="https://www.linkedin.com/company/devta-gensets-private-limited/about/" className="text-blue-700 text-2xl hover:text-blue-900 transition">
//             <FaLinkedinIn />
//           </a>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-2 gap-2">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/service" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Service</Link>
//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition mt-2 gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-18 sticky top-0 z-50 w-screen bg-black shadow-md">
//       {/* Navbar Container */}
//       <div className="flex flex-wrap items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
//         {/* Logo or Brand Section */}
//         <div className="flex items-center">
//           <Link
//             to="/"
//             className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white"
//           >
//             Devta Gensets Pvt Ltd
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-6 lg:gap-14 text-lg items-center font-semibold text-white">
//           <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
//           <Link to="/service" className="hover:text-cyan-500 transition duration-300">Service</Link>
//           <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300">Contact Us</Link>
//         </div>

//         {/* Social Icons, Request Quote Button, and Call Icon with Phone Number for Desktop */}
//         <div className="hidden md:flex items-center gap-3">
//           <a href="https://www.facebook.com/share/DfiunaneErmM6FqR/?mibextid=qi2Omg" className="text-blue-600 text-2xl hover:text-blue-800 transition"><FaFacebookF /></a>
//           <a href="https://x.com/KGVllp?t=LyZz_BWLQevEMsUFA8ggew&s=08" className="text-blue-600 text-2xl hover:text-blue-600 transition"><FaTwitter /></a>
//           <a href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz" className="text-pink-500 text-2xl hover:text-pink-700 transition"><FaInstagram /></a>
//           <a href="https://www.linkedin.com/company/karishmaglobal/" className="text-blue-700 text-2xl hover:text-blue-900 transition"><FaLinkedinIn /></a>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition gap-1">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/service" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Service</Link>
//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />
//           <a href="tel:+919999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition mt-2 gap-1">
//             <FaPhoneAlt />
//             <span> Call +91-9999966177</span>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
// import logo from '../resource/service21.png';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { Book } from "./Book";

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-20 sticky top-0 z-50 w-screen bg-blue-100 bg-opacity-50 shadow-md">
//       {/* Navbar Container */}
//       <div className="flex flex-wrap items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
//         {/* Logo or Brand Section */}
//         {/* <div className="flex items-center">
//           <Link to="/" className=" text-lg font-bold text-cyan-500">Devta Gensets Pvt Ltd</Link>
//         </div> */}

//         <div className="flex items-center">
//           <Link
//             to="/"
//             className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-cyan-500"
//           >
//             Devta Gensets Pvt Ltd
//           </Link>
//         </div>


//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-6 lg:gap-14 text-lg items-center font-semibold">
//           <Link to="/" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">Home</Link>
//           <Link to="/about" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">About</Link>
//           <Link to="/service" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">Service</Link>
//           <Link to="/contactUs" className="hover:border-b-2 hover:border-[#33b0b0] transition duration-300">Contact Us</Link>
//         </div>

//         {/* Social Icons, Request Quote Button, and Call Icon with Phone Number for Desktop */}
//         <div className="hidden md:flex items-center gap-3">
//           <a href="https://www.facebook.com/share/DfiunaneErmM6FqR/?mibextid=qi2Omg" className="text-blue-600 text-2xl hover:text-blue-800 transition"><FaFacebookF /></a>
//           <a href="https://x.com/KGVllp?t=LyZz_BWLQevEMsUFA8ggew&s=08" className="text-blue-600 text-2xl hover:text-blue-600 transition"><FaTwitter /></a>
//           <a href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz" className="text-pink-500 text-2xl hover:text-pink-700 transition"><FaInstagram /></a>
//           <a href="https://www.linkedin.com/company/karishmaglobal/" className="text-blue-700 text-2xl hover:text-blue-900 transition"><FaLinkedinIn /></a>
//           <Book />
//           <a href="tel:9999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition gap-1">
//             <FaPhoneAlt />
//             <span>Call +91-9999966177</span>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-black text-white flex flex-col items-center py-2">
//           <Link to="/" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/service" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Service</Link>
//           <Link to="/contactUs" className="py-2 w-full text-center hover:border-b-2 hover:border-[#33b0b0] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <Book />
//           <a href="tel:9999966177" className="flex items-center text-green-500 text-xl hover:text-green-700 transition mt-2 gap-1">
//             <FaPhoneAlt />
//             <span> Call +91-9999966177</span>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

