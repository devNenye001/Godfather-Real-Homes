import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/About-Us";
import Projects from "./pages/Projects";
import Details from "./pages/Details";
import Contact from "./pages/contact-us";
import PropertyListing from "./pages/property-listing";
import ScrollToTop from "./components/ScrollToTop";

// styles
import "./styles/about.css";
import "./styles/Details.css";
import "./styles/landingpage.css";
import "./styles/projects.css";
import "./styles/property-listing.css";
import "./styles/contact.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/listings" element={<PropertyListing />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
