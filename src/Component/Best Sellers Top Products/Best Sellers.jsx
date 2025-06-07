import React from "react";
import Drill from "../../assets/drill.jpg";
import Wrench from "../../assets/wrench.jpg";
import Cutter from "../../assets/cutter.jpg";
import SafetyGloves from "../../assets/h1.jpg";

const products = [
  { name: "Electric Drill Machine", price: "₹2,499", image: Drill },
  { name: "Adjustable Wrench", price: "₹399", image: Wrench },
  { name: "Wire Cutter Pro", price: "₹299", image: Cutter },
  { name: "Industrial Safety Gloves", price: "₹199", image: SafetyGloves },
];

const BestSellers = () => {
  return (
<div>

        <section className="bg-gradient-to-r from-[#2E2E2E] via-gray-800 to-black py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Best Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out group cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">
              {product.name}
            </h3>
            <p className="text-center text-yellow-400 font-bold text-lg">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
    <div className="my-2 mx-auto w-4/5 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-md"></div>
 
</div> );
};

export default BestSellers;
