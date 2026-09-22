import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

function SmokeCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const isContactForm = Boolean(target?.closest(".contact-form"));

      setPosition({ x: event.clientX, y: event.clientY });
      setIsInteractive(isContactForm);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`smoke-cursor ${isInteractive ? "smoke-cursor-hidden" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      <span className="smoke-cursor-dot" />
      <span className="smoke-cursor-cloud smoke-cursor-cloud-one" />
      <span className="smoke-cursor-cloud smoke-cursor-cloud-two" />
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SmokeCursor />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
