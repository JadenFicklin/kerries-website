import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Liptattoo from "./components/Liptattoo";
import Tattoo from "./components/Tattoo";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liptattoo" element={<Liptattoo />} />
        <Route path="/tattoo" element={<Tattoo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
