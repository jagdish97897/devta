import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../resource/service21.png';

export const Footer = () => {
  return (
    <div className="w-screen bg-black p-10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <img src={logo} className="w-[80px] h-[60px] mb-4" alt="Logo" />
          </Link>
          <p className="text-sm">
            373 Village Shahbad Daulatpur North West Delhi New Delhi - 110042, Delhi, India
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaGoogle />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><Link to="/">Home</Link></li>
            <li className="mb-2"><Link to="/about">About</Link></li>
            <li className="mb-2"><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Business Links */}
        <div>
          <h3 className="font-semibold mb-4">Business</h3>
          <ul>
            <li className="mb-2"><Link to="/projects">Project</Link></li>
            <li className="mb-2"><Link to="/team">Our Team</Link></li>
            <li className="mb-2"><Link to="/facts">Facts</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm">
            373 Village Shahbad Daulatpur North West Delhi New Delhi - 110042, Delhi, India
          </p>
          <p className="text-sm">devtagensets@rediffmail.com</p>
          <p className="text-sm">support@devtagensets.com</p>
          <p className="text-sm">+91-9999966177</p>
          <p className="text-sm">+91-9999966155</p>
          <p className="text-sm">+91-9999966162</p>
        </div>
      </div>
    </div>
  );
};


// import React from 'react'
// import { Book } from './Book'
// import { Button2 } from './Button2'
// import logo from "../resource/logokgv.jpg"
// import { Link } from 'react-router-dom'

// export const Footer = () => {
//   return (
//     <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
//     <div className='w-11/12 max-w-[1240px] flex  min-[320px]:flex-col sm:flex-row  items-center  justify-between gap-5 '>
//     <div className='min-[320px]:w-full sm:w-1/3  flex items-center justify-center mb-5'><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
//           <div className='w-2/3 flex justify-center sm:items-center  min-[320px]:flex-col sm:flex-row gap-5 min-[320px]:mb-5 sm:mb-2' >
//             <div className='flex  justify-center sm:items-center  gap-10 h-28 mr-5'>
//              {/* col1 */}
//               <div className='text-white '>
//                 <div className='font-semibold  '>Home</div>
//                 <Link to="/booking" ><div>Book Now</div></Link>
//                 <Link to="/contactUs">Get In Touch</Link>
//               </div>

//               {/* col2 */}
//               <div className='text-white '>
//               <div className='font-semibold   '>Product</div>
//                 <Link to={"/product"}><div>Featured Product</div></Link>
//                 <Link to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}>News Stories</Link>
//               </div>

//               {/* col 3 */}
//               <div className='text-white '>
//                 <div className='font-semibold  '>Company</div>
//                 <Link to={"/"}>About us</Link>
//                 <div>Careers</div>
//               </div>
//               </div>
//               {/* col4 -> buttons*/}
//               <div className='flex min-[320px]:flex-row sm:flex-col items-center justify-center  gap-10 '>
//                 <Button2/>
//               </div>
//           </div>
//     </div>
//     <div className='w-full rounded-md bg-[#57E226] h-[1px] '></div>

//     </div>
//   )
// }
