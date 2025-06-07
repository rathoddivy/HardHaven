import React from 'react'
import Navbar from '../../../Component/Navbar/Navbar'
import Hero from '../../../Component/Hero/Hero'
import Categories from '../../../Component/Categories/Categories'
import About from '../../../Component/About/About'
import BestSellers from '../../../Component/Best Sellers Top Products/Best Sellers'
import Contact from '../../../Component/Contact Section/Contact Section'
import Footer from '../../../Component/Footer/Footer'



const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <BestSellers />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
