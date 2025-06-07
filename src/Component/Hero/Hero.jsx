import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#2E2E2E] via-gray-800 to-black py-20 m-0 text-center text-white">
        <h1 className="text-4xl font-bold">HardHaven: Your Trusted Tool Partner</h1>
        <p className="text-lg mt-2">Everything you need for your next project</p>
        <button className="mt-6 bg-[#F9A825] text-black px-6 py-3 rounded active:scale-50 cursor-pointer hover:bg-[#FFB300] transition">
          Shop Now
        </button>
      </section>

      {/* Divider */}
      <div className="my-2 mx-auto w-4/5 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-md"></div>

      {/* You can add your next section here */}
    </div>
  )
}

export default Hero
