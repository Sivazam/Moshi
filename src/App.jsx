
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import BrandConsistency from './pages/BrandConsistency'
import Clients from './pages/Clients'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import 'swiper/css';
import 'swiper/css/navigation'; // if using navigation arrows

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/brand-consultancy" element={<BrandConsistency />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
