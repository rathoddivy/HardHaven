import React from "react";
import PowerTools from "../../assets/Powertolls.jpg";
import Hand from "../../assets/Handtools.jpg";
import Ele from "../../assets/Ele.jpg";
import Plumbing from "../../assets/Plumbing.jpg";
import Fasteners from "../../assets/Fasteners.jpg";
import Adhesives from "../../assets/Adhesives.jpg";
import PaintTools from "../../assets/PaintTools.jpg";
import Locks from "../../assets/Locks.jpg";
import Measuring from "../../assets/Measuring.jpg";
import Safety from "../../assets/Safety.jpg";
import Garden from "../../assets/Garden.jpg";
import Building from "../../assets/Building.jpg";

const categories = [
  { name: "Power Tools", image: PowerTools },
  { name: "Hand Tools", image: Hand },
  { name: "Electrical", image: Ele },
  { name: "Plumbing", image: Plumbing },
  { name: "Fasteners", image: Fasteners },
  { name: "Adhesives & Tapes", image: Adhesives },
  { name: "Paint & Painting Tools", image: PaintTools },
  { name: "Locks & Security", image: Locks },
  { name: "Measuring Tools", image: Measuring },
  { name: "Safety Equipment", image: Safety },
  { name: "Garden Tools", image: Garden },
  { name: "Building Materials", image: Building },
];

const Categories = () => {
  return (
    
<div id="Products">
        <section className="bg-gradient-to-r from-[#2E2E2E] via-gray-800 to-black py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out group cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <h3 className="text-center text-xl font-semibold text-white group-hover:text-yellow-400 transition">
              {category.name}
            </h3>
          </div>
        ))}
        
      </div>
      
    </section>
    <div className="my-2 mx-auto w-4/5 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-md"></div>
</div>
    
  );
};

export default Categories;
