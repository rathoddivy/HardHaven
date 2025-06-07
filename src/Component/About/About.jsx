import React from "react";

const About = () => {
  return (
<div id="About">

        <section className="bg-gradient-to-r from-[#2E2E2E] via-gray-800 to-black py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        About Us
      </h2>
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-md text-gray-200 leading-relaxed">
        <p className="mb-4">
          Welcome to{" "}
          <span className="font-semibold text-yellow-400">Hardware Hub</span> — your
          one-stop solution for all things hardware. Whether you're a professional
          contractor or a DIY enthusiast, we provide a wide range of tools,
          fasteners, electrical equipment, and building materials to support your every
          need.
        </p>
        <p className="mb-4">
          Our goal is to combine quality with affordability, offering products that
          are built to last. We work with top manufacturers and trusted brands to
          ensure you receive nothing but the best.
        </p>
        <p>
          At{" "}
          <span className="font-semibold text-yellow-400">Hardware Hub</span>, customer
          satisfaction is our top priority. We’re here to help you build, repair, and
          improve with confidence.
        </p>
        <hr className="mt-6 border-white/40" />
      </div>
    </section>

   <div className="my-2 mx-auto w-4/5 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-md"></div>
 
  
</div>

);
};

export default About;
