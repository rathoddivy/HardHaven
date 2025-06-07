import React, { useState } from "react";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="bg-[#2E2E2E] text-white shadow-md flex items-center justify-between p-4">
      <img src={logo} alt="Logo" className="w-15 h-12" />

      <ul className="flex gap-10 cursor-pointer">


        {/* Home link */}
        <li
          onClick={() => setActive("Home")}

          className={`py-2 border-b-2 ${

            active === "Home" ? "border-yellow-500 text-yellow-500" : "border-transparent"

          }
          
          hover:text-yellow-500`}
        >
          <a href="#Home">Home</a>
        </li>



        {/* Products link */}
        <li
          onClick={() => setActive("Products")}
          className={`py-2 border-b-2 ${
            active === "Products" ? "border-yellow-500 text-yellow-500" : "border-transparent"
          } hover:text-yellow-500`}
        >
          <a href="#Products">Products</a>
        </li>

        {/* About link */}
        <li
          onClick={() => setActive("About")}
          className={`py-2 border-b-2 ${
            active === "About" ? "border-yellow-500 text-yellow-500" : "border-transparent"
          } hover:text-yellow-500`}
        >
          <a href="#About">About</a>
        </li>

        {/* Contact link */}
        <li
          onClick={() => setActive("Contact")}
          className={`py-2 border-b-2 ${
            active === "Contact" ? "border-yellow-500 text-yellow-500" : "border-transparent"
          } hover:text-yellow-500`}
        >
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <button className="bg-yellow-500 text-black px-4 py-2 rounded active:scale-50 cursor-pointer hover:bg-yellow-600 transition">
        Login
      </button>
    </div>
  );
};

export default Navbar;
