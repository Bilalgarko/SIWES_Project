import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Sales", path: "/sales" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={styles.toggleBtn}
      >
        ☰
      </button>

      <div
        style={{
          ...styles.sidebar,
          left: isOpen ? "0" : "-250px",
        }}
      >
        <h2 style={styles.logo}>SBIMS</h2>

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.link,
              backgroundColor:
                location.pathname === item.path
                  ? "#1e293b"
                  : "transparent",
            }}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <Link to="/login" style={{ ...styles.link, marginTop: "auto" }}>
          Logout
        </Link>
      </div>
    </>
  );
}

const styles = {
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "250px",
    backgroundColor: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    transition: "0.3s",
  },
  logo: {
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  toggleBtn: {
    position: "fixed",
    top: "15px",
    left: "15px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
  },
};
