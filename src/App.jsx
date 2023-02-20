import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Faq from './components/FAQs/Faq'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
