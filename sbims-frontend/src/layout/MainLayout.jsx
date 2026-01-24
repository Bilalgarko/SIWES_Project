import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(true);
      else setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: darkMode ? "#0f172a" : "#f3f4f6",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <Sidebar
        isOpen={isOpen}
        isMobile={isMobile}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
      />

      <div style={{ flex: 1 }}>
        <Navbar
          setIsOpen={setIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div style={{ padding: "20px" }}>{children}</div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
      )}
    </div>
  );
}
