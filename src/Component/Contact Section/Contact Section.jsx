import React from "react";

const Contact = () => {
  return (
<div id="Contact">

        <section className="bg-gradient-to-r from-[#2E2E2E] via-gray-800 to-black py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block text-yellow-400 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-yellow-400 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-yellow-400 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold cursor-pointer active:scale-50 px-6 py-2  active  rounded-xl hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <div className="my-2 mx-auto w-4/5 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-md"></div>
 
</div> );
};

export default Contact;
