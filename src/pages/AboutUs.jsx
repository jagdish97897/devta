import React from "react";
import crausal1 from "../resource/DevtaGensets2.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal18.png";
import crausal16 from "../resource/crausal16.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MissionVision } from "../components/MissionVision";
import devrana from "../resource/devrana.png";
import devprakash from "../resource/devprakash.jpg";
import brahamrana from "../resource/brahamrana.png";
import logoabout4 from "../resource/logoabout4.png";
import logoabout3 from "../resource/logoabout3.png";
import logoabout5 from "../resource/logoabout5.png";
import logoabout6 from "../resource/logoabout6.png";
import dmrc from "../resource/dmrc images.jpg";
import coconstructionSite from "../resource/construction_sites.jpeg";
import factoryImage from "../resource/factory image.jpg";
import mall from "../resource/mall.jpg";
import hospital from "../resource/hospital.jpg";
import braham from "../resource/braham.jpg";
import banquet from "../resource/banquet.png";
import { FaCircle } from 'react-icons/fa';

import pusparaj from "../resource/pusparaj.png";

export const AboutUs = () => {

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

<div className="relative min-h-screen pt-24 bg-blue-400">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${crausal8})` }}
  ></div>

  {/* Header Section */}
  <header className="relative z-10 text-center mb-0 px-4">
    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold"
      style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
    >
      ABOUT US
    </h1>
    <h2
      className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-8 sm:mt-12 md:mt-20 px-4 sm:px-8 md:px-16"
      style={{ textShadow: "2px 2px 4px black, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}
    >
      Devta Gensets Private Limited has been at the forefront of providing world-class power solutions for over three decades. We specialize in the sales, rental, and service of high-performance diesel and gas generators, ranging from 125 kVA to 2500 kVA, catering to a wide range of industries, businesses, and residential needs. Our goal is to ensure uninterrupted energy supply for our clients, allowing them to focus on what matters most—growing their businesses and achieving their goals.
    </h2>
  </header>

  {/* Benefits Section */}
  <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-0 sm:mt-0 px-4 lg:px-24">
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-transparent transform transition duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl mt-2">
      <h2 className="text-md sm:text-lg md:text-xl font-bold text-blue-600 mb-2 sm:mb-4">Who Are We</h2>
      <p className="text-white text-xs sm:text-sm md:text-base">
        Devta Gensets Private Limited is a leading provider of power solutions with over three decades of experience in the industry. Established in 1991, we have built a strong reputation for excellence, reliability, and customer satisfaction. Our dedicated team of professionals is committed to delivering high-performance generators and tailored services to meet the unique energy requirements of our clients.
      </p>
    </div>
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-transparent transform transition duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl mt-2">
      <h2 className="text-md sm:text-lg md:text-xl font-bold text-blue-600 mb-2 sm:mb-4">Our Mission</h2>
      <p className="text-white text-xs sm:text-sm md:text-base">
        At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.
      </p>
    </div>
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-transparent transform transition duration-500 hover:scale-105 hover:border-blue-600 hover:shadow-2xl mt-2">
      <h2 className="text-md sm:text-lg md:text-xl font-bold text-blue-600 mb-2 sm:mb-4">What We Do</h2>
      <p className="text-white text-xs sm:text-sm md:text-base">
        We specialize in providing comprehensive power solutions tailored to meet diverse energy needs. Our services include the rental and sale of high-quality diesel and gas generators, ranging from 125 kVA to 2500 kVA, ensuring reliable power for industrial, commercial, and residential applications. We pride ourselves on delivering exceptional customer service, timely installations, and maintenance support.
      </p>
    </div>
  </section>
</div>

<div className="bg-black py-12 px-6 mt-0">
  {/* Container */}
  <div className="max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
      About Devta Gensets
    </h2>
    <p className="text-xl text-white mb-8">
      Devta Gensets Private Limited is a leading provider of power solutions,
      committed to delivering high-quality generators for industrial,
      commercial, and residential use. With a strong focus on innovation and
      customer satisfaction, we offer a range of rental, purchase, and sales
      options for reliable power solutions.
    </p>
  </div> 
  <MissionVision />
</div>



      <div className="bg-black py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">


        {/* Image and text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src={logoabout3}
              alt="Devta Gensets"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Why Choose Us?
            </h3>

            <ul className="space-y-4 text-white">
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Tailored Solutions:We provide customized IT and digital services, ensuring that every solution fits your business needs.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Top Brands: We partner with global leaders in power generation technology, ensuring you have access to the most reliable, cutting-edge products available in the market.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Nationwide Service: No matter where your business is located, we are equipped to provide our services across India, with quick turnaround times and local support.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Customer-Centric Approach: Our clients are our top priority. We pride ourselves on being responsive, attentive, and committed to delivering the highest level of customer satisfaction.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Sustainability Focus: As part of our commitment to a sustainable future, we offer energy-efficient generators and power solutions that help reduce environmental impact.
            </li>


     
          </ul>

          </div>
        </div>
      </div>
    </div>


    <div className="bg-black py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto">


        {/* Image and text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text (Left Side) */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Industries We Serve?
            </h3>


            <ul className="space-y-4 text-white">
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Manufacturing and Industrial Facilities
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Healthcare and Hospitals
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
   Telecommunications and Data Centers
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
  Construction and Infrastructure
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
 Commercial Real Estate
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
  Agriculture
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
 Residential Properties
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
   Events and Temporary Power Needs
            </li>
          </ul>

          </div>

          {/* Image (Right Side) */}
          <div className="text-center">
            <img
              src={logoabout6}
              alt="Devta Gensets"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>


    <div className="bg-black py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">



        {/* Image and text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src={logoabout5}
              alt="Devta Gensets"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Core Values
            </h3>

            <ul className="space-y-4 text-white">
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Customer-Centric Approach: Our customers are our top priority. We listen to their needs, understand their challenges, and offer customized solutions that align with their specific requirements. Our success is measured by the success of our clients.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
       Integrity and Trust: We believe in doing business with integrity. Transparency and honesty are the cornerstones of our relationships with clients, partners, and employees.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
       Excellence in Execution: We strive for perfection in every project we undertake, from the initial consultation to the final installation and beyond. Our team is dedicated to delivering solutions that consistently meet the highest standards of quality and performance.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Sustainability: We are committed to protecting the environment. By promoting energy-efficient and sustainable power solutions, we aim to reduce carbon footprints and contribute to a greener planet.
            </li>

            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Continuous Improvement: We are dedicated to learning, evolving, and innovating. Through ongoing research, development, and training, we ensure that our team stays ahead of industry trends and advancements.
            </li>

          </ul>
          </div>
        </div>
      </div>
    </div>

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
              Braham Rana is the Director of Devta Gensets Private Limited, registered with the Ministry of Corporate Affairs under DIN 02805943. Based in North Delhi, India, he plays a pivotal role in overseeing the company’s operations and strategic direction. With a strong commitment to innovation and service excellence, Braham Rana has been instrumental in leading Devta Gensets to new heights, focusing on providing top-quality power solutions. Under his leadership, the company, with a paid-up capital of ₹1,840,000.00, continues to thrive in delivering reliable energy systems and maintaining a reputation for industry expertise and customer satisfaction.
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
            <h3 className="text-2xl font-bold text-white">Mr. Dev Rana</h3>
            <p className="text-white text-lg mb-2">Director</p>
            <p className="text-white text-md leading-relaxed line-clamp-7">
              Dev Rana is the Director of DEVTA GENSETS PRIVATE LIMITED, bringing visionary leadership and extensive expertise in the power solutions industry. Under his guidance, the company has grown to provide reliable, high-quality energy solutions. His dedication to innovation and operational excellence drives DEVTA GENSETS’ commitment to empowering communities and businesses with dependable power systems. Dev Prakash Rana's leadership ensures that the company maintains a strong focus on customer satisfaction, sustainability, and continuous improvement in all aspects of its operations.
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



// import React from "react";
// import crausal1 from "../resource/DevtaGensets1.jpeg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";
// import crausal5 from "../resource/crausal5.jpg";
// import crausal6 from "../resource/crausal6.jpg";
// import crausal7 from "../resource/crausal7.jpg";
// import crausal8 from "../resource/crausal8.jpg";

// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";

// import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";

// import news from "../resource/news_clipping.jpeg";
// import news1 from "../resource/news1.jpg";
// import news2 from "../resource/news2.jpg";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from '../resource/bike_main.png';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { MissionVision } from "../components/MissionVision";

// export const AboutUs = () => {

//   const images = [
//     crausal1,
//     crausal2,
//     crausal3,
//     crausal4,
//     crausal5,
//     crausal6,
//     crausal7,
//     crausal8,
  
//   ];

//   return (
//     <div className="w-screen bg-gradient-to-b from-white to-white">

// <div className="relative min-h-screen pt-24 bg-blue-400">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center z-0"
//     style={{ backgroundImage: `url(${crausal1})` }}
//   ></div>

//   <header className="relative z-10 text-center mb-6 px-4">
//     <h1 className="text-6xl text-white font-bold"
//     style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>ABOUT US</h1>
//     <h2 className="text-xl text-white font-semibold">Welcome to The Digital Agency</h2>
//     <p className="text-sm text-white mt-2">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
//     </p>
//   </header>

//   <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-24 px-4 lg:px-24">
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Who Are We</h2>
//       <p>
//       Devta Gensets Private Limited is a leading provider of power solutions with over three decades of experience in the industry. Established in 1991, we have built a strong reputation for excellence, reliability, and customer satisfaction. Our dedicated team of professionals is committed to delivering high-performance generators and tailored services to meet the unique energy requirements of our clients. With a focus on quality and innovation, we partner with renowned brands to offer a wide range of diesel and gas generators. At Devta Gensets, we strive to empower businesses and communities with dependable power solutions that fuel progress and success.
//       </p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Our Mission</h2>
//       <p>
//       At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.
//       </p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//     <h2 className="text-lg font-bold mb-4">What We Do</h2>
//       <p>
//       we specialize in providing comprehensive power solutions tailored to meet diverse energy needs. Our services include the rental and sale of high-quality diesel and gas generators, ranging from 125 kVA to 2500 kVA, ensuring reliable power for industrial, commercial, and residential applications. We pride ourselves on delivering exceptional customer service, timely installations, and maintenance support, ensuring our clients have uninterrupted access to energy. With a commitment to quality and innovation, we empower businesses and communities to thrive with dependable power solutions.
//       </p>
    
      

//     </div>
//   </section>
// </div>


// {/* Key benefits section */}
// <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
//   {/* Heading */}
//   <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
//     style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//     How can we help you
//   </div>
  
//   {/* Subheading Text */}
//   <div classNa me="text-lg text-gray-600 text-center mb-8 max-w-2xl">
//     Discover the benefits of our services and how they can improve your life. 
//     Here are some key benefits that make us stand out.
//   </div>
  
//   {/* Key Benefits Grid */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
//     {keyBenefits.map((benefits, index) => {
//       return <BenefitCard key={index} passed={benefits} />;
//     })}
//   </div>
// </div>




// <div className="flex w-full h-auto bg-white">
//       {/* Image Container */}
//       <div className="w-1/2">
//         <img src={crausal1} alt="Office" className="w-full h-full object-cover" />
//       </div>
      
//       {/* Content Container */}
//       <div className="w-1/2 p-12">
//         <h1 className="text-4xl font-semibold mb-6">Why Choose Us?</h1>
//         <p className="text-gray-700 mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
//         </p>
//         <ul className="space-y-4">
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Best Quality Designs
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             24x7 Live Support
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Result Oriented Projects
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Award Winning Support Team
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Best ROI Techniques
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Experienced Professionals
//           </li>
//         </ul>
//       </div>
//     </div>



//     <div className="bg-white p-10">
//       {/* Statistics Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Some Numbers</h2>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className="flex justify-between">
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">87</h3>
//             <p className="text-gray-800">Satisfied Clients</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">150</h3>
//             <p className="text-gray-800">Projects Completed</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">28</h3>
//             <p className="text-gray-800">Accolades Earned</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">56K+</h3>
//             <p className="text-gray-800">Lines of Code</p>
//           </div>
//         </div>
//       </div>


//     </div>


//       <BusinessBook />
//     </div>
//   );
// };


