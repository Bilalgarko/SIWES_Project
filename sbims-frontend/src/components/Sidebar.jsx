import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      style={{
        width: isOpen ? "250px" : "0px",
        overflow: "hidden",
        transition: "0.3s",
        height: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isOpen ? "20px 10px" : "0px",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "30px" }}>SBIMS</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <NavLink to="/" style={linkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/products" style={linkStyle}>
            Products
          </NavLink>
          <NavLink to="/sales" style={linkStyle}>
            Sales
          </NavLink>
          <NavLink to="/reports" style={linkStyle}>
            Reports
          </NavLink>
          <NavLink to="/settings" style={linkStyle}>
            Settings
          </NavLink>
        </nav>
      </div>

      <button
        style={{
          padding: "10px",
          backgroundColor: "#1e293b",
          border: "none",
          color: "white",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: "white",
  padding: "10px",
  borderRadius: "6px",
  backgroundColor: isActive ? "#1e293b" : "transparent",
  transition: "0.3s",
});
