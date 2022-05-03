import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Lip from "./components/Lip";
import Eyeliner from "./components/Eyeliner";
import Eyebrows from "./components/Eyebrows";
import Tattoos from "./components/Tattoos";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liptattoos" element={<Lip />} />
        <Route path="/eyeliner" element={<Eyeliner />} />
        <Route path="/eyebrows" element={<Eyebrows />} />
        <Route path="/tattoos" element={<Tattoos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
