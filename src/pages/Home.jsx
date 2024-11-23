import React from "react";
import crausal1 from "../resource/DevtaGensets2.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import home2 from "../resource/crausal17.png";
import home3 from "../resource/crausal18.png";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";
import crausal16 from "../resource/crausal16.png";
import service1 from "../resource/service1.png";
import service2 from "../resource/service2.png";
import service3 from "../resource/service3.png";
import service4 from "../resource/service4.png";
import service5 from "../resource/service5.png";
import service6 from "../resource/service6.png";
import service7 from "../resource/service7.png";
import service8 from "../resource/service8.png";
import service9 from "../resource/service9.png";
import service10 from "../resource/service10.png";
import service11 from "../resource/service11.png";
import service12 from "../resource/service12.png";
import service13 from "../resource/service13.png";
import dmrc from "../resource/dmrc images.jpg";
import coconstructionSite from "../resource/construction_sites.jpeg";
import factoryImage from "../resource/factory image.jpg";
import mall from "../resource/mall.jpg";
import hospital from "../resource/hospital.jpg";
import { Carousel } from 'react-responsive-carousel';
import dev1 from "../resource/dev1.jpg";
import dev2 from "../resource/dev2.png";
import dev3 from "../resource/dev3.png";


import pusparaj from "../resource/pusparaj.png";
import devrana from "../resource/devrana.png";
import braham from "../resource/braham.jpg";
import devprakash from "../resource/devprakash.jpg";
import banquet from "../resource/banquet.png";
import brahamrana from "../resource/brahamrana.png";


import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";


import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MissionVision } from "../components/MissionVision";
import { AiOutlinePhone } from "react-icons/ai"; // Call Icon
import { AiOutlineMail } from "react-icons/ai"; // Gmail Icon

export const Home = () => {
  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">
       <div className="relative">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      className="h-full"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow z-[100]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow z-[100]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )
      }
    >
      <div>
        <img
          src={dev1}
          alt="Slide 1"
          className="object-cover w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
        />
      </div>
      <div>
        <img
          src={dev2}
          alt="Slide 2"
          className="object-cover w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
        />
      </div>
      <div>
        <img
          src={dev3}
          alt="Slide 3"
          className="object-cover w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
        />
      </div>
    </Carousel>
    <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p- md:p-12 mt-12 sm:mt-6 z-20">
          <div className="max-w-full sm:max-w-xl bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-transparent transform hover:shadow-2xl p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 shadow-lg">
            <h1
              className="text-blue-600 text-3xl sm:text-2xl md:text-6xl font-bold mb-4"
              style={{
                textShadow: "1px 1px 2px black, 2px 2px 3px rgba(0, 0, 0, 0.6)",
              }}
            >
              Effortless Renting of Generators
            </h1>
            <p
              className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-4"
              style={{
                textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)",
              }}
            >
              At Effortless Generators, we believe that renting generators should be
              simple and stress-free. Our user-friendly platform connects buyers and
              sellers, making it easier than ever to find the perfect generator for
              your needs or to sell equipment with ease.
            </p>
          </div>
        </div>
  </div>
  <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-30">
        {/* Call Button */}
        <a
          href="tel:+919999966177"
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
        >
          <AiOutlinePhone className="w-8 h-8" />
        </a>

        <a
          href="mailto:devtagensets@rediffmail.com"
          className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center"
        >
          <AiOutlineMail className="w-8 h-8" />
        </a>
      </div>
      
  <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div
          className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          How can we help you
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Discover how our expertise and services ensure the reliable power you need to keep your operations running smoothly.
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full ">
          {keyBenefits.map((benefits, index) => (
            <BenefitCard key={index} passed={benefits} />
          ))}
        </div>
      </div>
      

    <div className="flex flex-col min-h-screen w-full justify-around items-center py-6 px-4 bg-black">
  {/* Heading */}
  <div
    className="font-extrabold text-4xl md:text-5xl text-blue-500 text-center mb-6"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
  >
    Our Services
  </div>

  {/* Subheading */}
  <div className="text-lg text-gray-200 text-center mb-8 max-w-2xl sm:mb-6">
    Discover our range of services tailored to meet your energy needs. Whether you're looking to rent, buy, sell, or maintain power solutions, we have options for everyone.
  </div>

  {/* Rent, Buy, Sell, Maintenance Sections */}
  <div className="flex flex-wrap justify-center gap-8 w-full px-6 max-w-screen-xl">
    {/* Rent Section */}
    <div
      className="bg-white w-full sm:w-80 md:w-96 lg:w-[30%] xl:w-[28%] p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
    >
      <h3 className="font-bold text-xl mb-4 text-blue-500">Rent</h3>
      <p className="text-gray-700 mb-4">
        Affordable generator rentals for every need. From construction sites to events, we provide reliable power solutions ranging from 125 kVA to 2500 kVA. Enjoy flexible rental terms and 24/7 service.
      </p>
      <p className="font-semibold">Top Brands:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Caterpillar</li>
        <li>Cummins</li>
        <li>Kirloskar</li>
      </ul>
    </div>

    {/* Buy Section */}
    <div
      className="bg-white w-full sm:w-80 md:w-96 lg:w-[30%] xl:w-[28%] p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
    >
      <h3 className="font-bold text-xl mb-4 text-blue-500">Buy</h3>
      <p className="text-gray-700 mb-4">
        Invest in long-term power solutions with our range of diesel and gas generators. Ideal for industrial, commercial, and residential use, our generators come with installation and post-purchase support.
      </p>
      <p className="font-semibold">Featured Products:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>400 kVA Caterpillar Powerol Diesel Generator</li>
        <li>1500 kVA Cummins Diesel Generator</li>
      </ul>
    </div>

    {/* Sell Section */}
    <div
      className="bg-white w-full sm:w-80 md:w-96 lg:w-[30%] xl:w-[28%] p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
    >
      <h3 className="font-bold text-xl mb-4 text-blue-500">Sell</h3>
      <p className="text-gray-700 mb-4">
        Sell your used generators with ease. We provide a fair evaluation and transparent process, offering you the best value for your equipment while helping others access affordable power solutions.
      </p>
      <p className="font-semibold">Accepted Brands:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Sudhir</li>
        <li>Kirloskar</li>
        <li>Caterpillar Powerol</li>
      </ul>
    </div>

    {/* Periodic Maintenance Section */}
    <div
      className="bg-white w-full sm:w-80 md:w-96 lg:w-[30%] xl:w-[28%] p-6 rounded-xl border-4 border-blue-200 hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
    >
      <h3 className="font-bold text-xl mb-4 text-blue-500">Periodic Maintenance</h3>
      <p className="text-gray-700 mb-4">
        Keep your power solutions running efficiently with our periodic maintenance services. We offer scheduled check-ups, preventive maintenance, and emergency services to ensure your generators operate smoothly at all times.
      </p>
      <p className="font-semibold">Maintenance Services Include:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Engine Diagnostics and Tune-Up</li>
        <li>Fuel System Check</li>
        <li>Oil and Filter Replacement</li>
        <li>Cooling System Inspection</li>
      </ul>
    </div>
  </div>

  {/* Explore More Button */}
  <div className="flex justify-center mt-8">
    <a
      href="/"
      className="bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-400 transition duration-200 hover:scale-105"
    >
      Explore More
    </a>
  </div>
</div>


      {/* Key benefits section */}
      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Products
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-0 max-w-2xl">
          Explore our range of power solutions designed to meet your unique needs. From industrial generators to tailored energy services, discover how we can power your success.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 m-16 mb-12 ">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg  hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service2}
              alt="Liquid Transportation"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">400 kVA Caterpillar Powerol Diesel Generator</h4>

          </div>


          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service3}
              alt="Contract Logistics"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">1500 kVA Cummins Diesel Generator</h4>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg  hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service13}
              alt="Warehouse & Distribution"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">
              500 kVA Cummins Diesel Generator</h4>

          </div>

          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service4}
              alt="Warehouse & Distribution"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">Kirloskar Generator</h4>

          </div>

          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service6}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">750 kVA Diesel Generator </h4>

          </div>
          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service7}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">250 kVA Diesel Generator</h4>

          </div>
          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service8}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">810 kVA Caterpillar Diesel Generator </h4>

          </div>
          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service9}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">125 kVA Caterpillar Powerol Gas Generator</h4>

          </div>
          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service10}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">625 KVA Caterpillar Powerol Diesel Generator</h4>

          </div>
          <div className="bg-white p-6 rounded-lg hover:border-blue-400 transition-transform duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <img
              src={service11}
              alt="Specialized Transport"
              className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
            />
            <h4 className="font-bold mb-2">125 kva to 2500 kva</h4>

          </div>

        </div>

        {/* Explore More Button */}
        <div className="flex justify-center py-6">
          <Link
            to="/"
            className="bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-400 transition duration-200"
          >
            Explore More
          </Link>
        </div>

      </div>

      <MissionVision />

      <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4 bg-black">
        {/* Heading */}
        <div
          className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          "About Devta Gensets Private Limited"
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-8 max-w-2xl">
          Meet our leader, Braham Rana & Dev Prakash Rana, driving innovation at Devta Gensets. Discover the benefits of our services and how they can make a positive impact on your life.
        </div>

        {/* Braham Rana Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center mb-6 space-y-6 md:space-y-0 md:space-x-4">
          {/* Image container */}
          <img
            src={braham}
            alt="Mr. Braham Rana"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          {/* Text container */}
          <div className="text-center md:text-left max-w-3xl">
            <h3 className="text-2xl font-bold text-white">Mr. Braham Rana</h3>
            <p className="text-white text-lg mb-2">Director</p>
            <p className="text-white text-md leading-relaxed line-clamp-7">
            Braham Rana is the Director of Devta Gensets Private Limited, registered with the Ministry of Corporate Affairs. Based in North Delhi, India, he plays a pivotal role in overseeing the company’s operations and strategic direction. With a strong commitment to innovation and service excellence, Braham Rana has been instrumental in leading Devta Gensets to new heights, focusing on providing top-quality power solutions. Under his leadership, the company continues to thrive in delivering reliable energy systems and maintaining a reputation for industry expertise and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Dev Rana Section */}
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4">
          {/* Image container */}
          <img
            src={devprakash}
            alt="Mr. Dev Rana"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          {/* Text container */}
          <div className="text-center md:text-left max-w-3xl">
            <h3 className="text-2xl font-bold text-white">Mr. Dev Prakash Rana</h3>
            <p className="text-white text-lg mb-2">Director</p>
            <p className="text-white text-md leading-relaxed line-clamp-7">
              Dev Prakash Rana is the Director of DEVTA GENSETS PRIVATE LIMITED, bringing visionary leadership and extensive expertise in the power solutions industry. Under his guidance, the company has grown to provide reliable, high-quality energy solutions. His dedication to innovation and operational excellence drives DEVTA GENSETS’ commitment to empowering communities and businesses with dependable power systems. Dev Prakash Rana's leadership ensures that the company maintains a strong focus on customer satisfaction, sustainability, and continuous improvement in all aspects of its operations.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col min-h-fit w-full justify-items-center items-center py-4 px-4 bg-black">
        {/* Heading */}
        <div className="font-extrabold text-4xl md:text-5xl text-blue-700 text-center mb-8"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          Our Customers
        </div>

        {/* Subheading Text */}
        <div className="text-lg text-white text-center mb-4 max-w-2xl">
          We take pride in serving a diverse group of customers who trust our services to enhance their work and life.
        </div>

        <div className="m-16 mt-4 mb-4 max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    <img 
      src={coconstructionSite} 
      alt="Customer Image 1" 
      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    />
    <img 
      src={factoryImage} 
      alt="Customer Image 2" 
      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    />
    <img 
      src={dmrc} 
      alt="Customer Image 3" 
      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    />
    <img 
      src={mall} 
      alt="Customer Image 4" 
      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    />
    <img 
      src={hospital} 
      alt="Customer Image 5" 
      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    />
    <img 
      src={banquet} 
      alt="Customer Image 6" 
      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    />
  </div>
</div>



      </div>

      <BusinessBook />
    </div>
  );
};