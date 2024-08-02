import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponent';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Story = lazy(() => import('./pages/Story'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const CategoryListing = lazy(() => import('./pages/CategoryListing'));

function App() {
  return (
    <Router>
      <Header />
      <div className="flex-1 container mx-auto px-0 lg:px-32 mt-12">
        <Suspense fallback={<div>Loading Please Wait...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:title" element={<Story />} /> 
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/category/:category" element={<CategoryListing />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
