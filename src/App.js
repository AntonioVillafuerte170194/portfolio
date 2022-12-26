import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Links from "./components/link";
import Works from "./components/works";
import Contact from "./components/contact";
import { Container } from "@mui/material";
import Home from "./components/home";

export default function App() {
  return (
    <div>
      <Navbar />
      <Links />
      <Container>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}
