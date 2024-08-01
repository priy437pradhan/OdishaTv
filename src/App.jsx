import Header from './components/HeaderComponent'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Story from './pages/Story';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './App.css'
function App() {

  return (
    <Router>
    <Header />
      <div className="flex-1 container mx-auto mt-12 px-32">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/story/:id" element={<Story />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
      </div>
    {/* <Footer /> */}
  </Router>
    
  )
}

export default App
