import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Network from "./pages/Network";
import About from "./pages/About";

const API_BASE = "http://localhost:5000"; // change later for deployment

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}