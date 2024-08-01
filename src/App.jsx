import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CategoryListing from './pages/CategoryListing';
import Header from './components/HeaderComponent';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="flex-1 container mx-auto px-2 lg:px-32 mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/listing" element={<Listing />} /> */}
          <Route path="/story/:id" element={<Story />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/category/:category" element={<CategoryListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
